
import React, { useState } from 'react';
import Header from '../components/Header';
import { DOCTORS, getIcon } from '../constants';

interface DoctorProfileProps {
  doctorId: string;
  onBack: () => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctorId, onBack }) => {
  const doctor = DOCTORS.find(d => d.id === doctorId) || DOCTORS[0];
  const [mode, setMode] = useState<'clinic' | 'virtual'>('clinic');
  const [selectedTime, setSelectedTime] = useState<string | null>('12.30 PM');

  const timeSlots = [
    '12.00 PM', '12.30 PM', '01.00 PM', '01.30 PM',
    '02.00 PM', '02.30 PM', '03.00 PM', '03.30 PM',
    '04.00 PM', '04.30 PM', '05.00 PM', '05.30 PM'
  ];

  return (
    <div className="pb-36 bg-white min-h-full">
      <div className="bg-[#F7FAFC] pb-10 rounded-b-[48px]">
        <div className="flex justify-between items-center px-6 pt-12 pb-4">
          <button 
            onClick={onBack}
            className="p-3 bg-white shadow-sm rounded-2xl text-slate-600"
          >
            {getIcon('ChevronLeft', 'w-6 h-6')}
          </button>
          <div className="flex gap-2">
            <button className="p-3 bg-white shadow-sm rounded-2xl text-slate-600">
              {getIcon('Phone', 'w-5 h-5')}
            </button>
            <button className="p-3 bg-white shadow-sm rounded-2xl text-slate-600">
              {getIcon('MessageCircle', 'w-5 h-5')}
            </button>
          </div>
        </div>

        <div className="px-6 flex gap-6 items-start mt-4">
          <div className="relative w-36 h-48 bg-teal-50/50 rounded-[40px] overflow-hidden">
             <img src={doctor.image} className="w-full h-full object-cover scale-110" alt={doctor.name} />
          </div>
          <div className="flex-1 pt-4">
            <p className="text-[#2A869B] text-[10px] font-bold tracking-widest uppercase mb-1">ID: {doctor.id}</p>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight mb-1">{doctor.name}</h1>
            <p className="text-slate-400 text-sm font-medium mb-4">{doctor.specialty}</p>
            
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">Starting from</p>
              <p className="text-xl font-bold text-slate-800">{doctor.price} <span className="text-slate-400 text-xs font-medium">/per session</span></p>
            </div>
          </div>
        </div>

        <div className="px-6 mt-8 flex justify-between gap-3">
           <div className="bg-white px-4 py-3 rounded-full flex items-center gap-2 shadow-sm flex-1 justify-center">
              {getIcon('Star', 'w-4 h-4 text-orange-400')}
              <span className="text-xs font-bold text-slate-700">{doctor.rating}</span>
           </div>
           <div className="bg-white px-4 py-3 rounded-full flex items-center gap-2 shadow-sm flex-1 justify-center">
              {getIcon('Calendar', 'w-4 h-4 text-blue-400')}
              <span className="text-xs font-bold text-slate-700">{doctor.experience}</span>
           </div>
           <div className="bg-white px-4 py-3 rounded-full flex items-center gap-2 shadow-sm flex-[1.5] justify-center">
              {getIcon('Users', 'w-4 h-4 text-[#2A869B]')}
              <span className="text-[10px] font-bold text-slate-700 whitespace-nowrap">Patients Served: {doctor.patients}</span>
           </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-md font-bold text-slate-800 mb-4">Today's Availability</h3>
        
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setMode('clinic')}
            className={`flex-1 flex items-center justify-center gap-3 p-5 rounded-[24px] transition-all ${mode === 'clinic' ? 'bg-[#2A869B] text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}
          >
            {getIcon('MapPin', 'w-5 h-5')}
            <span className="font-bold text-sm">In-Clinic</span>
          </button>
          <button 
            onClick={() => setMode('virtual')}
            className={`flex-1 flex items-center justify-center gap-3 p-5 rounded-[24px] transition-all ${mode === 'virtual' ? 'bg-[#2A869B] text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}
          >
            {getIcon('Video', 'w-5 h-5')}
            <span className="font-bold text-sm">Virtual</span>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {timeSlots.map(time => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-3 px-1 rounded-2xl text-[10px] font-bold transition-all ${
                selectedTime === time 
                ? 'bg-[#2A869B] text-white' 
                : 'bg-slate-50 text-slate-400 border border-transparent hover:border-slate-200'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 left-0 right-0 px-6 max-w-[420px] mx-auto z-50">
        <button className="w-full bg-gradient-to-r from-[#2A869B] to-[#1E6170] text-white py-5 px-8 rounded-[32px] flex justify-between items-center shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
          <span className="font-bold text-lg">Book Appointment</span>
          <div className="p-2 bg-white/20 rounded-full">
            {getIcon('ChevronLeft', 'w-6 h-6 rotate-180')}
          </div>
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
