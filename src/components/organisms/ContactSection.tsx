import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import ContactInfo from '../molecules/ContactInfo';
import FormField from '../molecules/FormField';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import Select from '../atoms/Select';
import Button from '../atoms/Button';
import { useContactForm } from '../../hooks';

const serviceOptions = [
  { value: 'consulta-general', label: 'Consulta General' },
  { value: 'medicina-interna', label: 'Medicina Interna' },
  { value: 'cardiologia', label: 'Cardiología' },
  { value: 'dermatologia', label: 'Dermatología' },
  { value: 'ginecologia', label: 'Ginecología' },
  { value: 'pediatria', label: 'Pediatría' },
  { value: 'ortopedia', label: 'Ortopedia' },
  { value: 'neurologia', label: 'Neurología' },
  { value: 'psicologia', label: 'Psicología' },
  { value: 'nutricion', label: 'Nutrición' },
  { value: 'laboratorio', label: 'Laboratorio' },
  { value: 'radiologia', label: 'Radiología' },
  { value: 'fisioterapia', label: 'Fisioterapia' },
  { value: 'odontologia', label: 'Odontología' },
  { value: 'oftalmologia', label: 'Oftalmología' },
  { value: 'otorrinolaringologia', label: 'Otorrinolaringología' },
  { value: 'urologia', label: 'Urología' },
  { value: 'gastroenterologia', label: 'Gastroenterología' },
  { value: 'endocrinologia', label: 'Endocrinología' },
  { value: 'reumatologia', label: 'Reumatología' }
];

export default function ContactSection() {
  const {
    formData,
    isLoading,
    isRefreshingToken,
    isSubmitted,
    error,
    successMessage,
    handleSubmit,
    handleChange
  } = useContactForm();

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Contáctanos y Agenda tu Cita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para atenderte. Agenda tu cita médica o contáctanos para más información sobre nuestros servicios especializados
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              
              <div 
                className="space-y-6"
                role="list"
                aria-label="Información de contacto de la clínica"
              >
                <ContactInfo
                  icon={MapPin}
                  title="Dirección"
                  details={[
                    'Av. Francisco de Miranda, Torre Parque Cristal, Piso 15',
                    'Campo Alegre, Caracas 1060, Venezuela'
                  ]}
                />
                <ContactInfo
                  icon={Phone}
                  title="Teléfonos"
                  details={[
                    '+58 212 555-0123 (Principal)',
                    '+58 412 555-0456 (Emergencias)'
                  ]}
                />
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  details={[
                    'info@clinicacaracas.com',
                    'citas@clinicacaracas.com'
                  ]}
                />
                <ContactInfo
                  icon={Clock}
                  title="Horarios"
                  details={[
                    'Lunes - Viernes: 8:00 AM - 6:00 PM',
                    'Sábado: 8:00 AM - 2:00 PM',
                    'Domingo: Emergencias únicamente'
                  ]}
                />
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-gray-500">Mapa de ubicación</p>
                  <p className="text-sm text-gray-400">Campo Alegre, Caracas</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <main className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Agenda tu Cita Médica</h3>
            
            {isSubmitted && successMessage && (
              <div 
                className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-2"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-green-800">{successMessage}</span>
              </div>
            )}

            {isRefreshingToken && (
              <div 
                className="mb-6 p-4 bg-blue-100 border border-blue-300 rounded-lg flex items-center space-x-2"
                role="status"
                aria-live="polite"
              >
                <Loader2 className="w-5 h-5 text-blue-600 flex-shrink-0 animate-spin" aria-hidden="true" />
                <span className="text-blue-800">Renovando conexión segura...</span>
              </div>
            )}

            {error && (
              <div 
                className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center space-x-2"
                role="alert"
                aria-live="assertive"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-red-800">{error}</span>
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              aria-label="Formulario de contacto para agendar cita médica"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <FormField label="Nombre completo" required htmlFor="name">
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    disabled={isLoading || isRefreshingToken}
                    aria-describedby="name-help"
                  />
                </FormField>
                <FormField label="Email" required htmlFor="email">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    disabled={isLoading || isRefreshingToken}
                    aria-describedby="email-help"
                  />
                </FormField>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField label="Teléfono" required htmlFor="phone">
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+58 412 123-4567"
                    disabled={isLoading || isRefreshingToken}
                    aria-describedby="phone-help"
                  />
                </FormField>
                <FormField label="Servicio" required htmlFor="service">
                  <Select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    options={serviceOptions}
                    placeholder="Selecciona un servicio médico"
                    disabled={isLoading || isRefreshingToken}
                    aria-describedby="service-help"
                  />
                </FormField>
              </div>

              <FormField label="Mensaje" htmlFor="message">
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu consulta o síntomas..."
                  disabled={isLoading || isRefreshingToken}
                  aria-describedby="message-help"
                />
              </FormField>

              <Button
                type="submit"
                icon={isLoading || isRefreshingToken ? Loader2 : Send}
                className="w-full"
                size="lg"
                disabled={isLoading || isRefreshingToken}
                aria-label={isLoading ? "Enviando formulario..." : "Enviar formulario de contacto"}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    <span>Enviando...</span>
                  </div>
                ) : isRefreshingToken ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    <span>Renovando conexión...</span>
                  </div>
                ) : (
                  'Enviar Mensaje'
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>¿Necesitas atención inmediata?</strong> Llámanos al +58 412 555-0456 para emergencias médicas las 24 horas.
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}