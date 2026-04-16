import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Attach token to every request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('safarwise_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ── AUTH 
export const loginUser     = (data: { email: string; password: string }) => api.post('/auth/login', data);
export const registerUser  = (data: { name: string; email: string; password: string; phone?: string }) => api.post('/auth/register', data);
export const getMe         = () => api.get('/auth/me');
export const updateProfile = (data: { name?: string; phone?: string }) => api.put('/auth/update', data);
export const verifyOtp     = (data: { email: string; token: string }) => api.post('/auth/verify-otp', data);

// ── PACKAGES 
export const getPackages   = () => api.get('/packages');
export const getPackage    = (id: string) => api.get(`/packages/${id}`);

// ── BOOKINGS 
export const createBooking       = (data: any) => api.post('/bookings', data);
export const getMyBookings       = () => api.get('/bookings/my');
export const cancelBooking       = (id: string) => api.put(`/bookings/${id}/cancel`);
export const getAllBookings       = () => api.get('/bookings/all');
export const updateBookingStatus = (id: string, bookingStatus: string) => api.put(`/bookings/${id}/status`, { bookingStatus });
export const dismissBooking      = (id: string) => api.put(`/bookings/${id}/dismiss`);

// ── ADS 
export const getActiveAds  = () => api.get('/ads');
export const getAllAds      = () => api.get('/ads/all');
export const createAd      = (data: any) => api.post('/ads', data);
export const toggleAd      = (id: string) => api.put(`/ads/${id}/toggle`);
export const deleteAd      = (id: string) => api.delete(`/ads/${id}`);

// ── CONTACT 
export const sendContact   = (data: any) => api.post('/contact', data);

// ── CITY TOURS 
export const getCityTours  = () => api.get('/city-tours');
export const getCityTour   = (id: string) => api.get(`/city-tours/${id}`);

export default api;