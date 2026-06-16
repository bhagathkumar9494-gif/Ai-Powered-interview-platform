import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  User,
  GraduationCap,
  Link as LinkIcon,
  Briefcase,
  Camera,
} from 'lucide-react';

export const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    college: 'University of Technology',
    degree: 'B.S. Computer Science',
    graduationYear: '2024',
    linkedin: 'linkedin.com/in/alexj',
    github: 'github.com/alexj-dev',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <p className="text-textSecondary mt-1">
          Manage your personal information and resume details.
        </p>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 border-b border-gray-800 pb-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-secondary border-4 border-gray-800 flex items-center justify-center overflow-hidden">
              <User className="w-16 h-16 text-gray-500" />
            </div>

            <button
              type="button"
              className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Camera className="w-8 h-8 text-white" />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-white">
              {formData.name}
            </h2>

            <p className="text-primary font-medium">
              Frontend Developer
            </p>

            <p className="text-textSecondary text-sm max-w-md">
              Passionate developer focusing on React and modern web
              technologies. Looking for roles in fast-paced startup
              environments.
            </p>
          </div>

          <Button variant="primary">
            Save Changes
          </Button>
        </div>

        <form className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              Education
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="University/College"
                name="college"
                value={formData.college}
                onChange={handleChange}
              />

              <Input
                label="Degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />

              <Input
                label="Graduation Year"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-blue-400" />
              Social Links
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <Input
                  label="LinkedIn Profile"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="pl-10"
                />

                <Briefcase className="w-4 h-4 absolute left-4 bottom-3.5 text-gray-500" />
              </div>

              <div className="relative">
                <Input
                  label="GitHub Profile"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="pl-10"
                />

                <Briefcase className="w-4 h-4 absolute left-4 bottom-3.5 text-gray-500" />
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};