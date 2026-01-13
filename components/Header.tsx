
import React from 'react';
import { getIcon } from '../constants';

interface HeaderProps {
  type: 'dashboard' | 'simple';
  title?: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ type, title, onBack }) => {
  if (type === 'dashboard') {
    return (
      <div className="bg-gradient-to-br from-[#2A869B] to-[#1E6170] pt-12 pb-16 px-6 rounded-b-[40px] text-white relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.pravatar.cc/100?u=sarah" 
              className="w-12 h-12 rounded-2xl border-2 border-teal-300/30 object-cover" 
              alt="User"
            />
            <div>
              <p className="text-teal-100 text-sm font-medium">Hi Sarah,</p>
              <h2 className="text-lg font-bold">Welcome back!</h2>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              {getIcon('MessageCircle', 'w-5 h-5')}
            </button>
            <button className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              {getIcon('Bell', 'w-5 h-5')}
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-semibold leading-tight max-w-[240px]">
          Let's take the next step for your health!
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-transparent pt-12 pb-4 px-6 flex justify-between items-center">
      <button 
        onClick={onBack}
        className="p-3 bg-white shadow-sm rounded-2xl text-slate-600 hover:bg-slate-50 transition-colors"
      >
        {getIcon('ChevronLeft', 'w-6 h-6')}
      </button>
      {title && <h2 className="text-lg font-semibold text-slate-800">{title}</h2>}
      <div className="flex gap-2">
         {type === 'simple' && (
           <button className="p-3 bg-white shadow-sm rounded-2xl text-slate-600">
             {getIcon('Bell', 'w-6 h-6')}
           </button>
         )}
      </div>
    </div>
  );
};

export default Header;
