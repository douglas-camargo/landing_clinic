import { DivideIcon as LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  icon: typeof LucideIcon;
  title: string;
  details: string[];
}

export default function ContactInfo({ icon: Icon, title, details }: ContactInfoProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  );
}