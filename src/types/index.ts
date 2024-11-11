export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  imageUrl: string;
  progress?: number;
  modules?: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  completed: boolean;
  duration: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  completedCourses: string[];
  enrolledCourses: string[];
  progress: {
    totalCourses: number;
    completedCourses: number;
    averageScore: number;
    totalHoursSpent: number;
  };
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedDate: string;
  icon: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}