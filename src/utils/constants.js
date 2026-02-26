// API Constants
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Theme Options
export const THEMES = [
  { id: 'light', name: 'Light', bg: 'bg-gray-50', text: 'text-gray-900', card: 'bg-white' },
  { id: 'dark', name: 'Dark', bg: 'bg-gray-900', text: 'text-white', card: 'bg-gray-800' },
  { id: 'blue', name: 'Blue', bg: 'bg-blue-50', text: 'text-gray-900', card: 'bg-white' },
  { id: 'green', name: 'Green', bg: 'bg-green-50', text: 'text-gray-900', card: 'bg-white' },
  { id: 'purple', name: 'Purple', bg: 'bg-purple-50', text: 'text-gray-900', card: 'bg-white' },
];

// Icon Options for Links
export const LINK_ICONS = [
  { id: 'link', name: 'Link', icon: '🔗' },
  { id: 'github', name: 'GitHub', icon: '🐙' },
  { id: 'twitter', name: 'Twitter', icon: '🐦' },
  { id: 'instagram', name: 'Instagram', icon: '📷' },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
  { id: 'youtube', name: 'YouTube', icon: '▶️' },
  { id: 'facebook', name: 'Facebook', icon: '📘' },
  { id: 'tiktok', name: 'TikTok', icon: '🎵' },
  { id: 'spotify', name: 'Spotify', icon: '🎧' },
  { id: 'twitch', name: 'Twitch', icon: '🎮' },
  { id: 'discord', name: 'Discord', icon: '💬' },
  { id: 'telegram', name: 'Telegram', icon: '✈️' },
  { id: 'whatsapp', name: 'WhatsApp', icon: '📱' },
  { id: 'email', name: 'Email', icon: '📧' },
  { id: 'website', name: 'Website', icon: '🌐' },
];

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized. Please login again.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LINK_CREATED: 'Link created successfully!',
  LINK_UPDATED: 'Link updated successfully!',
  LINK_DELETED: 'Link deleted successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  LINKS_REORDERED: 'Links reordered successfully!',
};

// Validation Rules
export const VALIDATION = {
  USERNAME: {
    min: 3,
    max: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
    message: 'Username must be 3-20 characters and can only contain letters, numbers, and underscores'
  },
  PASSWORD: {
    min: 6,
    message: 'Password must be at least 6 characters long'
  },
  URL: {
    message: 'Please enter a valid URL'
  }
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
};

// Route Paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  PUBLIC_PROFILE: '/:username',
};

// Default User Settings
export const DEFAULT_USER = {
  displayName: '',
  bio: '',
  profileImage: '',
  theme: 'light',
};

// Pagination
export const PAGINATION = {
  LINKS_PER_PAGE: 10,
  DEFAULT_PAGE: 1,
};

// Animation Durations
export const ANIMATION = {
  MODAL: 300,
  TOAST: 4000,
  TRANSITION: 200,
};
