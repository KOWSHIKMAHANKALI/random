import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Student } from '../types';
import { fetchStudentProfile } from '../services/api';

export default function Profile() {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
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

  const handleDownloadCertificate = async (courseId: string) => {
    // In production, this would call an API endpoint to generate and download the certificate
    const certificateUrl = `https://your-api-gateway-url/certificates/${courseId}`;
    window.open(certificateUrl, '_blank');
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!student) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
        <div className="space-y-4">
          <p className="text-gray-600">Name: <span className="text-gray-900">{student.name}</span></p>
          <p className="text-gray-600">Email: <span className="text-gray-900">{student.email}</span></p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Completed Courses</h2>
        {student.completedCourses.length === 0 ? (
          <p className="text-gray-500">No completed courses yet.</p>
        ) : (
          <div className="space-y-4">
            {student.completedCourses.map((courseId) => (
              <div key={courseId} className="flex items-center justify-between p-4 border rounded-lg">
                <span>{courseId}</span>
                <button
                  onClick={() => handleDownloadCertificate(courseId)}
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Certificate</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}