
import React from 'react';
import Header from '../components/Header';
import { DOCTORS, getIcon } from '../constants';
import { ViewType } from '../types';

interface SearchListingProps {
  onDoctorClick: (id: string) => void;
}

const SearchListing: React.FC<SearchListingProps> = ({ onDoctorClick }) => {
  return (
    <div className="pb-32 bg-[#F7FAFC] min-h-full">
      <Header type="simple" />
      
      <div className="px-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 max-w-[200px]">Find the right doctor for you</h1>
        
        {/* Search Bar */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 bg-white rounded-3xl p-4 flex items-center gap-3 shadow-sm">
            {getIcon('Search', 'w-6 h-6 text-slate-400')}
            <input 
              type="text" 
              placeholder="Search health conditions..." 
              className="bg-transparent border-none outline-none w-full text-slate-600 font-medium"
            />
          </div>
          <button className="p-4 bg-white rounded-3xl shadow-sm text-slate-600">
            {getIcon('SlidersHorizontal', 'w-6 h-6')}
          </button>
        </div>

        {/* Doctor List */}
        <div className="space-y-6">
          {DOCTORS.map((doc, idx) => (
            <div 
              key={doc.id}
              onClick={() => onDoctorClick(doc.id)}
              className="relative group bg-white rounded-[32px] p-6 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
            >
              {/* Decorative background shape */}
              <div className={`absolute -right-12 -top-12 w-64 h-64 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${idx % 2 === 0 ? 'bg-[#2A869B]' : 'bg-slate-400'}`}></div>
              
              <div className="flex justify-between relative z-10">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-teal-50 text-[#2A869B] rounded-xl">
                      {getIcon(idx % 2 === 0 ? 'Activity' : 'Brain', 'w-5 h-5')}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 leading-none">{doc.name}</h4>
                      <p className="text-slate-400 text-xs font-medium mt-1">{doc.specialty}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 leading-tight mb-4">{doc.description}</h3>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">Starting from</p>
                      <p className="text-xl font-bold text-slate-800">{doc.price} <span className="text-slate-400 text-xs font-medium">/per session</span></p>
                    </div>
                    <button className="flex items-center gap-2 pl-4 pr-1 py-1 bg-white border border-slate-100 rounded-full shadow-sm">
                      <span className="text-xs font-bold text-slate-700">Book Now</span>
                      <div className="p-2 bg-gradient-to-r from-[#2A869B] to-[#4DB6AC] text-white rounded-full">
                        {getIcon('ChevronLeft', 'w-4 h-4 rotate-180')}
                      </div>
                    </button>
                  </div>
                </div>

                <div className="w-24 relative self-end">
                   <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-teal-50 to-transparent rounded-b-full"></div>
                   <img 
                    src={doc.image} 
                    className="relative z-10 w-full h-auto object-contain transform translate-y-2 group-hover:scale-110 transition-transform duration-500" 
                    alt={doc.name}
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchListing;
