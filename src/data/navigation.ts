export interface MenuItem {
  label: string;
  id: string;
}

export const menuItems: MenuItem[] = [
  { label: 'Inicio', id: 'home' },
  { label: 'Servicios', id: 'services' },
  { label: 'Especialistas', id: 'specialists' },
  { label: 'Testimonios', id: 'testimonials' },
  { label: 'Contacto', id: 'contact' }
];

export const contactInfo = {
  phone: '+58 212 555-0123',
  emergencyPhone: '+58 412 555-0456',
  location: 'Caracas, Venezuela',
  address: {
    street: 'Av. Francisco de Miranda',
    building: 'Torre Parque Cristal, Piso 15',
    city: 'Campo Alegre, Caracas'
  },
  email: 'info@clinicacaracas.com',
  schedule: {
    weekdays: 'Lun - Vie: 8:00 AM - 6:00 PM',
    saturday: 'Sáb: 8:00 AM - 2:00 PM'
  }
};
