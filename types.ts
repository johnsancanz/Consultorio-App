
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  SEARCH = 'SEARCH',
  PROFILE = 'PROFILE'
}

export interface Specialist {
  id: string;
  name: string;
  icon: string;
  color: 'primary' | 'gray';
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  price: string;
  rating: number;
  experience: string;
  patients: string;
  image: string;
  description?: string;
}

export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  image: string;
}
