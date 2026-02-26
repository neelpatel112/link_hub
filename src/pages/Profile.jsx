import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { users } from '../services/api';
import { FiUser, FiMail, FiEdit2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    bio: user?.bio || '',
    profileImage: user?.profileImage || '',
    theme: user?.theme || 'light'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await users.updateProfile(formData);
      updateUser(response.data);
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getProfileUrl = () => {
    return `${window.location.origin}/${user?.username}`;
  };

  const copyProfileLink = () => {
    navigator.clipboard.writeText(getProfileUrl());
    toast.success('Profile link copied to clipboard!');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiEdit2 className="mr-2 h-4 w-4" />
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Info */}
        <div className="px-6 py-4">
          {!isEditing ? (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  {user?.profileImage ? (
                    <img src={user.profileImage} alt={user.username} className="h-20 w-20 rounded-full" />
                  ) : (
                    <FiUser className="h-10 w-10 text-blue-600" />
                  )}
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {user?.displayName || user?.username}
                  </h3>
                  <p className="text-sm text-gray-500">@{user?.username}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dl className="divide-y divide-gray-200">
                  <div className="py-3 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-sm text-gray-900">{user?.email}</dd>
                  </div>
                  {user?.bio && (
                    <div className="py-3 flex justify-between">
                      <dt className="text-sm font-medium text-gray-500">Bio</dt>
                      <dd className="text-sm text-gray-900">{user.bio}</dd>
                    </div>
                  )}
                  <div className="py-3 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Theme</dt>
                    <dd className="text-sm text-gray-900 capitalize">{user?.theme}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Profile URL</dt>
                    <dd className="text-sm text-blue-600">
                      <button onClick={copyProfileLink} className="hover:underline">
                        {getProfileUrl()}
                      </button>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows="3"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell your story..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Theme
                </label>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="blue">Blue</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;