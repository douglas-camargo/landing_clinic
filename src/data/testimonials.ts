export interface Testimonial {
  name: string;
  age: number;
  treatment: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'María Pérez',
    age: 45,
    treatment: 'Cardiología',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'El Dr. Mendoza salvó mi vida. Su profesionalismo y dedicación son excepcionales. Todo el personal fue muy amable durante mi tratamiento.',
    date: 'Hace 2 meses'
  },
  {
    name: 'José Rodríguez',
    age: 38,
    treatment: 'Oftalmología',
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Recuperé mi visión completamente gracias al Dr. Silva. La cirugía fue perfecta y el seguimiento post-operatorio excelente.',
    date: 'Hace 1 mes'
  },
  {
    name: 'Carmen López',
    age: 32,
    treatment: 'Pediatría',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'La Dra. Rodríguez ha cuidado a mis hijos desde pequeños. Su trato es maravilloso y siempre está disponible cuando la necesitamos.',
    date: 'Hace 3 semanas'
  },
  {
    name: 'Antonio Silva',
    age: 52,
    treatment: 'Neurología',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Después de meses de dolores de cabeza, la Dra. González encontró la causa y me ayudó a recuperar mi calidad de vida.',
    date: 'Hace 6 semanas'
  }
];
