import { Heart, Brain, Eye, Baby, Stethoscope, Activity, Bone, Pill } from 'lucide-react';

export interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Heart,
    title: 'Cardiología',
    description: 'Cuidado completo del corazón con tecnología de última generación.',
    features: ['Electrocardiogramas', 'Ecocardiogramas', 'Holter 24h', 'Cateterismo']
  },
  {
    icon: Brain,
    title: 'Neurología',
    description: 'Diagnóstico y tratamiento de trastornos del sistema nervioso.',
    features: ['Resonancia magnética', 'Electroencefalograma', 'Tomografía', 'Consulta especializada']
  },
  {
    icon: Eye,
    title: 'Oftalmología',
    description: 'Cuidado integral de la vista con equipos de vanguardia.',
    features: ['Cirugía de cataratas', 'Tratamiento de glaucoma', 'Corrección de miopía', 'Exámenes de fondo de ojo']
  },
  {
    icon: Baby,
    title: 'Pediatría',
    description: 'Atención especializada para el crecimiento saludable de los niños.',
    features: ['Control de crecimiento', 'Vacunación', 'Emergencias pediátricas', 'Consulta neonatal']
  },
  {
    icon: Stethoscope,
    title: 'Medicina General',
    description: 'Atención primaria integral para toda la familia.',
    features: ['Consulta general', 'Chequeos preventivos', 'Medicina preventiva', 'Seguimiento médico']
  },
  {
    icon: Activity,
    title: 'Medicina Deportiva',
    description: 'Especialistas en lesiones deportivas y rehabilitación.',
    features: ['Evaluación deportiva', 'Fisioterapia', 'Rehabilitación', 'Prevención de lesiones']
  },
  {
    icon: Bone,
    title: 'Traumatología',
    description: 'Tratamiento de lesiones del sistema musculoesquelético.',
    features: ['Cirugía ortopédica', 'Tratamiento de fracturas', 'Artroscopia', 'Rehabilitación']
  },
  {
    icon: Pill,
    title: 'Medicina Interna',
    description: 'Diagnóstico y tratamiento de enfermedades complejas.',
    features: ['Diagnóstico integral', 'Enfermedades crónicas', 'Medicina preventiva', 'Seguimiento especializado']
  }
];
