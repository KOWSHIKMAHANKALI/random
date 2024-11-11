import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, User, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium ${
                  isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              <LayoutDashboard className="h-5 w-5 mr-2" />
              Dashboard
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium ${
                  isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Courses
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium ${
                  isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              <User className="h-5 w-5 mr-2" />
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}