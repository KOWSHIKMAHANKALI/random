import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onComplete: (courseId: string) => void;
}

export default function CourseCard({ course, onComplete }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={course.imageUrl} 
        alt={course.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-2" />
          <span>{course.duration}</span>
        </div>
        {course.completed ? (
          <div className="flex items-center text-green-600">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Completed</span>
          </div>
        ) : (
          <button
            onClick={() => onComplete(course.id)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
}