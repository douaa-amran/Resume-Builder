const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8005';
const UPLOAD_API_URL = import.meta.env.VITE_UPLOAD_API_URL || 'http://localhost:8080';

export { UPLOAD_API_URL };
export default API_BASE_URL;

