export const mockCourses = [
  {
    id: '1',
    title: 'AWS Cloud Fundamentals',
    description: 'Learn the basics of AWS cloud computing and services',
    duration: '6 weeks',
    completed: false,
    progress: 45,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    modules: [
      { id: 'm1', title: 'Introduction to AWS', completed: true, duration: '1 week' },
      { id: 'm2', title: 'EC2 and VPC', completed: true, duration: '2 weeks' },
      { id: 'm3', title: 'S3 and Storage', completed: false, duration: '1 week' },
      { id: 'm4', title: 'Lambda and Serverless', completed: false, duration: '2 weeks' }
    ]
  },
  {
    id: '2',
    title: 'Web Development with React',
    description: 'Master modern web development using React',
    duration: '8 weeks',
    completed: true,
    progress: 100,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    modules: [
      { id: 'm1', title: 'React Basics', completed: true, duration: '2 weeks' },
      { id: 'm2', title: 'State Management', completed: true, duration: '2 weeks' },
      { id: 'm3', title: 'React Router', completed: true, duration: '2 weeks' },
      { id: 'm4', title: 'Advanced Concepts', completed: true, duration: '2 weeks' }
    ]
  },
  {
    id: '3',
    title: 'Database Design',
    description: 'Learn database design principles and DynamoDB',
    duration: '4 weeks',
    completed: false,
    progress: 25,
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000',
    modules: [
      { id: 'm1', title: 'Database Fundamentals', completed: true, duration: '1 week' },
      { id: 'm2', title: 'DynamoDB Basics', completed: false, duration: '1 week' },
      { id: 'm3', title: 'Advanced DynamoDB', completed: false, duration: '2 weeks' }
    ]
  }
];

export const mockStudent = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  completedCourses: ['2'],
  enrolledCourses: ['1', '3'],
  progress: {
    totalCourses: 3,
    completedCourses: 1,
    averageScore: 85,
    totalHoursSpent: 45
  },
  achievements: [
    {
      id: 'a1',
      title: 'React Master',
      description: 'Completed the React Development course with excellence',
      earnedDate: '2024-03-15',
      icon: 'trophy'
    },
    {
      id: 'a2',
      title: 'Quick Learner',
      description: 'Completed 5 modules in record time',
      earnedDate: '2024-03-10',
      icon: 'zap'
    },
    {
      id: 'a3',
      title: 'First Steps',
      description: 'Started your learning journey',
      earnedDate: '2024-03-01',
      icon: 'award'
    }
  ]
};