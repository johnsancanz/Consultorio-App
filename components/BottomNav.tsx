
import React from 'react';
import { getIcon } from '../constants';
import { ViewType } from '../types';

interface BottomNavProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-[360px] bg-white/80 backdrop-blur-lg rounded-[32px] shadow-xl p-2 flex justify-between items-center z-50 border border-white/20">
      <button 
        onClick={() => onViewChange(ViewType.DASHBOARD)}
        className={`p-4 rounded-[24px] transition-all duration-300 ${activeView === ViewType.DASHBOARD ? 'bg-gradient-to-r from-[#2A869B] to-[#4DB6AC] text-white shadow-lg' : 'text-slate-400'}`}
      >
        {getIcon('Home', 'w-6 h-6')}
      </button>
      <button 
        onClick={() => onViewChange(ViewType.SEARCH)}
        className={`p-4 rounded-[24px] transition-all duration-300 ${activeView === ViewType.SEARCH ? 'bg-gradient-to-r from-[#2A869B] to-[#4DB6AC] text-white shadow-lg' : 'text-slate-400'}`}
      >
        {getIcon('Search', 'w-6 h-6')}
      </button>
      <button 
        className="p-4 rounded-[24px] text-slate-400"
      >
        {getIcon('Activity', 'w-6 h-6')}
      </button>
      <button 
        className="p-4 rounded-[24px] text-slate-400"
      >
        {getIcon('Heart', 'w-6 h-6')}
      </button>
    </div>
  );
};

export default BottomNav;
