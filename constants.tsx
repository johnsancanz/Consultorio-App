
import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  Brain, 
  Bone, 
  MessageCircle, 
  Bell, 
  Search, 
  SlidersHorizontal, 
  ChevronLeft, 
  Phone, 
  Video,
  Calendar,
  Star,
  Users,
  MapPin,
  Home,
  Heart
} from 'lucide-react';
import { Specialist, Doctor, Appointment } from './types';

export const SPECIALISTS: Specialist[] = [
  { id: '1', name: 'General Physician', icon: 'Stethoscope', color: 'primary' },
  { id: '2', name: 'Cardiologist Doctor', icon: 'Activity', color: 'gray' },
  { id: '3', name: 'Neurologist Doctor', icon: 'Brain', color: 'gray' },
  { id: '4', name: 'Orthopedic Doctor', icon: 'Bone', color: 'gray' }
];

export const DOCTORS: Doctor[] = [
  {
    id: '0269784',
    name: 'Savannah Nguyen',
    specialty: 'Cardiologist',
    price: '$15.5',
    rating: 4.8,
    experience: '8+ Years',
    patients: '1.2k+',
    image: 'https://i.pravatar.cc/300?u=savannah',
    description: 'Heart Health, Screening & treatment'
  },
  {
    id: '0269785',
    name: 'Ronald Richards',
    specialty: 'Neurologist',
    price: '$1.2k',
    rating: 4.8,
    experience: '10+',
    patients: '120+',
    image: 'https://i.pravatar.cc/300?u=ronald',
    description: 'Brain, Nerve & Spinal Disorders'
  }
];

export const NEXT_APPOINTMENT: Appointment = {
  id: '1',
  doctorName: 'Darlene Robertson',
  specialty: 'Neurologist',
  date: '3rd August, Sunday',
  time: '4:00 PM',
  image: 'https://i.pravatar.cc/300?u=darlene'
};

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Bone': return <Bone className={className} />;
    case 'MessageCircle': return <MessageCircle className={className} />;
    case 'Bell': return <Bell className={className} />;
    case 'Search': return <Search className={className} />;
    case 'SlidersHorizontal': return <SlidersHorizontal className={className} />;
    case 'ChevronLeft': return <ChevronLeft className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'Video': return <Video className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'Star': return <Star className={className} />;
    case 'Users': return <Users className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Heart': return <Heart className={className} />;
    default: return null;
  }
};
