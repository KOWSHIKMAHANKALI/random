import React from 'react';
import { Award } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  earnedDate: string;
}

export default function AchievementCard({ title, description, earnedDate }: AchievementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
      <div className="bg-indigo-100 p-3 rounded-full">
        <Award className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-gray-400 text-xs mt-2">Earned on {earnedDate}</p>
      </div>
    </div>
  );
}