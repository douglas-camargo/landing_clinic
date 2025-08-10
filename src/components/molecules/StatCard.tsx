import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: typeof LucideIcon;
  value: string;
  label: string;
  iconColor?: string;
}

export default function StatCard({ icon: Icon, value, label, iconColor = 'text-blue-600' }: StatCardProps) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <Icon className={`w-8 h-8 ${iconColor}`} />
      <div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
};
