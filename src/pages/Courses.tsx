import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Course } from '../types';
import { fetchCourses, completeCourse } from '../services/api';

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    setError(null);
    const response = await fetchCourses();
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setCourses(response.data);
    }
    setLoading(false);
  };

  const handleCourseComplete = async (courseId: string) => {
    const response = await completeCourse(courseId);
    if (response.error) {
      setError(response.error);
    } else {
      setCourses(courses.map(course => 
        course.id === courseId ? { ...course, completed: true } : course
      ));
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onComplete={handleCourseComplete}
          />
        ))}
      </div>
    </div>
  );
}