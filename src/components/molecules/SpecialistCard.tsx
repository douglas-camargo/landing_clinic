import { Award, Calendar, Star } from 'lucide-react';
import Button from '../atoms/Button';

interface SpecialistCardProps {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  qualifications: string[];
  rating: number;
  consultations: number;
}

export default function SpecialistCard({
  name,
  specialty,
  experience,
  image,
  qualifications,
  rating,
  consultations
}: SpecialistCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-semibold mb-2">{specialty}</p>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Award className="w-4 h-4" />
            <span>{experience}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{consultations} consultas</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {qualifications.map((qualification, index) => (
            <p key={index} className="text-sm text-gray-600">
              • {qualification}
            </p>
          ))}
        </div>

        <Button variant="primary" size="sm" className="w-full">
          Agendar Consulta
        </Button>
      </div>
    </div>
  );
};
