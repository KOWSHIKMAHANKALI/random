import React from 'react';
import { Circle } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  value: number;
  total: number;
  color: string;
}

export default function ProgressCard({ title, value, total, color }: ProgressCardProps) {
  const percentage = Math.round((value / total) * 100) || 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Circle className={`h-8 w-8 ${color} mr-3`} />
          <div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-gray-500">out of {total}</p>
          </div>
        </div>
        <div className="text-xl font-semibold">{percentage}%</div>
      </div>
    </div>
  );
}