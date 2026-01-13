
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] flex justify-center items-center p-0 md:p-4">
      <div className="relative w-full max-w-[420px] h-[100vh] md:h-[880px] bg-white shadow-2xl md:rounded-[40px] overflow-hidden flex flex-col">
        {/* Notch removed as per user request to remove 'black borders/elements' */}
        <div className="flex-1 overflow-y-auto bg-[#F7FAFC]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
