import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { links } from '../services/api';
import { FiPlus, FiEdit2, FiTrash2, FiExternalLink, FiGrip } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { user } = useAuth();
  const [userLinks, setUserLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingLink, setEditingLink] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    icon: 'link'
  });

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await links.getAll();
      setUserLinks(response.data);
    } catch (error) {
      toast.error('Failed to fetch links');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingLink) {
        await links.update(editingLink._id, formData);
        toast.success('Link updated successfully');
      } else {
        await links.create(formData);
        toast.success('Link created successfully');
      }
      setShowModal(false);
      setEditingLink(null);
      setFormData({ title: '', url: '', icon: 'link' });
      fetchLinks();
    } catch (error) {
      toast.error(editingLink ? 'Failed to update link' : 'Failed to create link');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this link?')) {
      try {
        await links.delete(id);
        toast.success('Link deleted successfully');
        fetchLinks();
      } catch (error) {
        toast.error('Failed to delete link');
      }
    }
  };

  const handleEdit = (link) => {
    setEditingLink(link);
    setFormData({
      title: link.title,
      url: link.url,
      icon: link.icon
    });
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Your Links
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage all your links in one place
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            onClick={() => {
              setEditingLink(null);
              setFormData({ title: '', url: '', icon: 'link' });
              setShowModal(true);
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiPlus className="-ml-1 mr-2 h-5 w-5" />
            Add New Link
          </button>
        </div>
      </div>

      {/* Links Grid */}
      {userLinks.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No links</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating your first link.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {userLinks.map((link, index) => (
            <div
              key={link._id}
              className="relative bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{link.title}</h3>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 truncate block mt-1"
                  >
                    {link.url}
                  </a>
                  <div className="mt-2 text-sm text-gray-500">
                    Clicks: {link.clicks || 0}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(link)}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <FiEdit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(link._id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {editingLink ? 'Edit Link' : 'Create New Link'}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="My Website"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      URL
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditingLink(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {editingLink ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;