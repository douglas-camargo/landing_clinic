import { useState, useEffect } from 'react';
import { EncryptionService } from '../services/encryption';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface TokenData {
  token: string;
  expiresAt: number;
}

interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    expiresIn: string;
    type: string;
    environment: string;
  };
}

interface ApiResponse {
  success: boolean;
  message: string;
  citaId?: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshingToken, setIsRefreshingToken] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<TokenData | null>(null);

  const getAuthToken = async (): Promise<TokenData | null> => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const clientId = import.meta.env.VITE_API_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
      
      if (!baseUrl || !clientId || !clientSecret) {
        throw new Error('Variables de entorno de API no configuradas');
      }
      
      const response = await fetch(`${baseUrl}/api/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(EncryptionService.encryptCredentials(clientId, clientSecret))
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
      }

      const data: AuthResponse = await response.json();

      if (data.success && data.data?.token) {
        const expiresInMs = 24 * 60 * 60 * 1000;
        const expiresAt = Date.now() + expiresInMs;
        
        return {
          token: data.data.token,
          expiresAt: expiresAt
        };
      } else {
        throw new Error(data.message || 'Error al obtener token de autenticación');
      }
    } catch (error) {
      return null;
    }
  };

  const isTokenValid = (tokenData: TokenData | null): boolean => {
    if (!tokenData) return false;
    
    const marginMs = 5 * 60 * 1000; // 5 minutos
    return Date.now() < (tokenData.expiresAt - marginMs);
  };

  const getValidToken = async (): Promise<string | null> => {
    if (isTokenValid(authToken)) {
      return authToken!.token;
    }

    const newTokenData = await getAuthToken();
    if (newTokenData) {
      setAuthToken(newTokenData);
      localStorage.setItem('authToken', JSON.stringify(newTokenData));
      return newTokenData.token;
    }

    return null;
  };

  const refreshToken = async (): Promise<TokenData | null> => {
    setIsRefreshingToken(true);
    
    try {
      setAuthToken(null);
      localStorage.removeItem('authToken');
      
      const newToken = await getAuthToken();
      if (newToken) {
        setAuthToken(newToken);
        localStorage.setItem('authToken', JSON.stringify(newToken));
      }
      
      return newToken;
    } finally {
      setIsRefreshingToken(false);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      try {
        const tokenData: TokenData = JSON.parse(savedToken);
        if (isTokenValid(tokenData)) {
          setAuthToken(tokenData);
        } else {
          localStorage.removeItem('authToken');
        }
      } catch (error) {
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const token = await getValidToken();
      if (!token) {
        throw new Error('No se pudo obtener el token de autenticación');
      }

      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/citas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
          setSuccessMessage(null);
        }, 5000);
      } else {
        if (data.message === 'Token inválido' || response.status === 401) {
          const newToken = await refreshToken();
          if (newToken) {
            const retryResponse = await fetch(`${baseUrl}/api/citas`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${newToken.token}`
              },
              body: JSON.stringify(formData)
            });

            const retryData: ApiResponse = await retryResponse.json();

            if (retryResponse.ok && retryData.success) {
              setSuccessMessage(retryData.message);
              setIsSubmitted(true);
              setFormData({ name: '', email: '', phone: '', service: '', message: '' });
              
              setTimeout(() => {
                setIsSubmitted(false);
                setSuccessMessage(null);
              }, 5000);
            } else {
              setError(retryData.message || 'Error al enviar la cita después de renovar el token. Por favor, intenta nuevamente.');
            }
          } else {
            setError('No se pudo renovar el token de autenticación. Por favor, recarga la página e intenta nuevamente.');
          }
        } else {
          setError(data.message || 'Error al enviar la cita. Por favor, intenta nuevamente.');
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    if (error) {
      setError(null);
    }
  };

  return {
    formData,
    isLoading,
    isRefreshingToken,
    isSubmitted,
    error,
    successMessage,
    handleSubmit,
    handleChange
  };
}
