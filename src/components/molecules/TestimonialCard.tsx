import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  age: number;
  treatment: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

export default function TestimonialCard({
  name,
  age,
  treatment,
  image,
  rating,
  text,
  date
}: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
      
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{age} años</p>
        </div>
      </div>

      <div className="flex items-center mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">{text}</p>

      <div className="flex justify-between items-center text-sm">
        <span className="text-blue-600 font-medium">{treatment}</span>
        <span className="text-gray-500">{date}</span>
      </div>
    </div>
  );
};
