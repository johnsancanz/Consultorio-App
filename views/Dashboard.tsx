
import React from 'react';
import Header from '../components/Header';
import { NEXT_APPOINTMENT, SPECIALISTS, getIcon } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="pb-32">
      <Header type="dashboard" />
      
      <div className="px-6 -mt-10">
        {/* Next Appointment Card */}
        <div className="bg-white/95 rounded-[32px] p-6 shadow-xl border border-teal-50/50 mb-8 relative z-10">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-semibold text-slate-800">Your Next Appointments <span className="text-slate-400 text-sm ml-1">(3)</span></h3>
          </div>
          
          <div className="flex items-center gap-4">
            <img 
              src={NEXT_APPOINTMENT.image} 
              className="w-14 h-14 rounded-2xl object-cover" 
              alt={NEXT_APPOINTMENT.doctorName} 
            />
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 leading-none mb-1">{NEXT_APPOINTMENT.doctorName}</h4>
              <p className="text-slate-400 text-xs font-medium">{NEXT_APPOINTMENT.specialty}</p>
            </div>
            <button className="p-3 bg-teal-50 text-teal-600 rounded-2xl hover:bg-teal-100 transition-colors">
              {getIcon('Video', 'w-5 h-5')}
            </button>
          </div>

          <div className="mt-5 pt-5 border-t border-slate-50 flex gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-orange-50 text-orange-400 rounded-lg">
                {getIcon('Calendar', 'w-4 h-4')}
              </div>
              <span className="text-[11px] font-semibold text-slate-500">{NEXT_APPOINTMENT.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 text-blue-400 rounded-lg">
                {getIcon('Activity', 'w-4 h-4')}
              </div>
              <span className="text-[11px] font-semibold text-slate-500">{NEXT_APPOINTMENT.time}</span>
            </div>
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="mb-6 flex justify-between items-end">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Pick the</p>
            <h3 className="text-xl font-bold text-slate-800 leading-none">Right Specialist</h3>
          </div>
          <button className="text-[#2A869B] bg-teal-50 p-2.5 rounded-xl">
             {getIcon('Search', 'w-5 h-5')}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {SPECIALISTS.map((s) => (
            <div 
              key={s.id} 
              className={`p-6 rounded-[32px] relative overflow-hidden h-[160px] flex flex-col justify-end transition-all hover:scale-[1.02] cursor-pointer ${
                s.color === 'primary' 
                ? 'bg-gradient-to-br from-[#2A869B] to-[#1E6170] text-white' 
                : 'bg-white shadow-sm text-slate-800'
              }`}
            >
              <div className={`absolute top-4 right-4 p-3 rounded-2xl ${
                s.color === 'primary' ? 'bg-white/20' : 'bg-teal-50 text-[#2A869B]'
              }`}>
                {getIcon(s.icon, 'w-6 h-6')}
              </div>
              <p className="font-bold text-md leading-tight max-w-[80px]">
                {s.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
