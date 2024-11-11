import { generateClient } from 'aws-amplify/api';
import { Course, Student, ApiResponse } from '../types';
import { mockCourses, mockStudent } from './mockData';

const client = generateClient();
const IS_DEV = import.meta.env.DEV;

export async function fetchCourses(): Promise<ApiResponse<Course[]>> {
  try {
    if (IS_DEV) {
      return { data: mockCourses };
    }
    
    const response = await client.get('studentAPI', '/courses');
    return { data: response };
  } catch (error) {
    console.error('Error fetching courses:', error);
    return { error: 'Failed to fetch courses. Please try again later.' };
  }
}

export async function completeCourse(courseId: string): Promise<ApiResponse<void>> {
  try {
    if (IS_DEV) {
      return { data: undefined };
    }

    await client.post('studentAPI', '/courses/complete', {
      body: { courseId }
    });
    return { data: undefined };
  } catch (error) {
    console.error('Error completing course:', error);
    return { error: 'Failed to complete course. Please try again later.' };
  }
}

export async function fetchStudentProfile(): Promise<ApiResponse<Student>> {
  try {
    if (IS_DEV) {
      return { data: mockStudent };
    }

    const response = await client.get('studentAPI', '/student/profile');
    return { data: response };
  } catch (error) {
    console.error('Error fetching profile:', error);
    return { error: 'Failed to fetch profile. Please try again later.' };
  }
}