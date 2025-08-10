export interface Specialist {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  qualifications: string[];
  rating: number;
  consultations: number;
}

export const specialists: Specialist[] = [
  {
    name: 'Dr. Carlos Mendoza',
    specialty: 'Cardiología',
    experience: '15 años',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad Central de Venezuela', 'Especialización en Cardiología - Cleveland Clinic'],
    rating: 4.9,
    consultations: 1250
  },
  {
    name: 'Dra. María González',
    specialty: 'Neurología',
    experience: '12 años',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad Católica', 'Fellowship en Neurología - Mayo Clinic'],
    rating: 4.8,
    consultations: 980
  },
  {
    name: 'Dr. Roberto Silva',
    specialty: 'Oftalmología',
    experience: '18 años',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad Simón Bolívar', 'Especialización en Cirugía Ocular - Barcelona'],
    rating: 4.9,
    consultations: 1540
  },
  {
    name: 'Dra. Ana Rodríguez',
    specialty: 'Pediatría',
    experience: '10 años',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad de Los Andes', 'Residencia Pediátrica - Hospital de Niños'],
    rating: 4.7,
    consultations: 820
  }
];
