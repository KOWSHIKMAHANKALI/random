import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, Trophy } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ProgressCard from '../components/ProgressCard';
import AchievementCard from '../components/AchievementCard';
import { Student } from '../types';
import { fetchStudentProfile } from '../services/api';

export default function Dashboard() {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    setLoading(true);
    setError(null);
    const response = await fetchStudentProfile();
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setStudent(response.data);
    }
    setLoading(false);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!student) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {student.name}!</h1>
        <p className="text-gray-600 mt-2">Here's an overview of your learning progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ProgressCard
          title="Course Progress"
          value={student.progress.completedCourses}
          total={student.progress.totalCourses}
          color="text-blue-500"
        />
        <ProgressCard
          title="Average Score"
          value={student.progress.averageScore}
          total={100}
          color="text-green-500"
        />
        <ProgressCard
          title="Hours Spent"
          value={student.progress.totalHoursSpent}
          total={100}
          color="text-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Current Courses
          </h2>
          <div className="space-y-4">
            {student.enrolledCourses.map((courseId) => (
              <div key={courseId} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold">{courseId}</h3>
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Trophy className="h-6 w-6 mr-2" />
            Recent Achievements
          </h2>
          <div className="space-y-4">
            {student.achievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                title={achievement.title}
                description={achievement.description}
                earnedDate={achievement.earnedDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}