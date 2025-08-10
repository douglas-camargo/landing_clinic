export interface Stat {
  value: string;
  label: string;
}

export const patientStats: Stat[] = [
  { value: '98%', label: 'Satisfacción del paciente' },
  { value: '50K+', label: 'Pacientes atendidos' },
  { value: '4.9', label: 'Calificación promedio' },
  { value: '15+', label: 'Años de experiencia' }
];

export const specialistStats = [
  { value: 'Certificación Internacional', label: 'Formación en las mejores instituciones médicas del mundo' },
  { value: 'Excelencia Comprobada', label: 'Más del 95% de satisfacción de nuestros pacientes' },
  { value: 'Disponibilidad', label: 'Citas disponibles en horarios flexibles para tu comodidad' }
];
