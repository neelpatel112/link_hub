import React from 'react';
import { FiEdit2, FiTrash2, FiExternalLink, FiGrip } from 'react-icons/fi';

const LinkCard = ({ link, onEdit, onDelete, index }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
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
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
            <span>Clicks: {link.clicks || 0}</span>
            <span>•</span>
            <span className={link.isActive ? 'text-green-600' : 'text-red-600'}>
              {link.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(link)}
            className="text-gray-400 hover:text-blue-600 transition-colors"
            title="Edit link"
          >
            <FiEdit2 className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(link._id)}
            className="text-gray-400 hover:text-red-600 transition-colors"
            title="Delete link"
          >
            <FiTrash2 className="h-5 w-5" />
          </button>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Open link"
          >
            <FiExternalLink className="h-5 w-5" />
          </a>
          <div className="text-gray-400 cursor-move" title="Drag to reorder">
            <FiGrip className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;