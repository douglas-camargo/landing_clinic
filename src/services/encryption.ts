import CryptoJS from 'crypto-js';

// Clave de cifrado desde variables de entorno
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY;

export class EncryptionService {
  /**
   * Cifra un texto usando AES
   */
  static encrypt(text: string): string {
    try {
      return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
    } catch (error) {
      throw new Error('Error al cifrar los datos');
    }
  }

  /**
   * Descifra un texto cifrado usando AES
   */
  static decrypt(encryptedText: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, ENCRYPTION_KEY);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      
      if (!decrypted) {
        throw new Error('No se pudo descifrar el texto');
      }
      
      return decrypted;
    } catch (error) {
      throw new Error('Error al descifrar los datos');
    }
  }

  /**
   * Cifra las credenciales de la API
   */
  static encryptCredentials(clientId: string, clientSecret: string): {
    encryptedClientId: string;
    encryptedClientSecret: string;
  } {
    return {
      encryptedClientId: this.encrypt(clientId),
      encryptedClientSecret: this.encrypt(clientSecret)
    };
  }

  /**
   * Descifra las credenciales de la API
   */
  static decryptCredentials(encryptedClientId: string, encryptedClientSecret: string): {
    clientId: string;
    clientSecret: string;
  } {
    return {
      clientId: this.decrypt(encryptedClientId),
      clientSecret: this.decrypt(encryptedClientSecret)
    };
  }
}
