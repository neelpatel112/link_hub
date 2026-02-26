import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { profile } from '../services/api';
import { FiUser, FiExternalLink } from 'react-icons/fi';
import toast from 'react-hot-toast';

const PublicProfile = () => {
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, [username]);

  const fetchProfile = async () => {
    try {
      const response = await profile.getPublic(username);
      setProfileData(response.data);
      setError(false);
    } catch (error) {
      setError(true);
      toast.error('Profile not found');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = async (linkId) => {
    try {
      await links.trackClick(linkId);
    } catch (error) {
      console.error('Failed to track click');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !profileData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
        <p className="text-gray-600">The user @{username} doesn't exist</p>
      </div>
    );
  }

  const { user, links } = profileData;

  return (
    <div className={`min-h-screen py-12 ${
      user.theme === 'dark' ? 'bg-gray-900' : 
      user.theme === 'blue' ? 'bg-blue-50' : 'bg-gray-50'
    }`}>
      <div className="max-w-2xl mx-auto px-4">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="inline-block">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.username}
                className="h-24 w-24 rounded-full mx-auto border-4 border-white shadow-lg"
              />
            ) : (
              <div className="h-24 w-24 rounded-full mx-auto bg-blue-100 flex items-center justify-center border-4 border-white shadow-lg">
                <FiUser className="h-12 w-12 text-blue-600" />
              </div>
            )}
          </div>
          <h1 className={`mt-4 text-2xl font-bold ${
            user.theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {user.displayName || user.username}
          </h1>
          <p className={`mt-2 ${
            user.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            @{user.username}
          </p>
          {user.bio && (
            <p className={`mt-4 max-w-md mx-auto ${
              user.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {user.bio}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link._id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick(link._id)}
              className={`block p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                user.theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-medium ${
                  user.theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {link.title}
                </span>
                <FiExternalLink className={`h-5 w-5 ${
                  user.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`} />
              </div>
            </a>
          ))}

          {links.length === 0 && (
            <p className={`text-center ${
              user.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              No links yet
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${
            user.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Powered by LinkHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;