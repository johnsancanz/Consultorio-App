
import React, { useState } from 'react';
import Layout from './components/Layout';
import BottomNav from './components/BottomNav';
import Dashboard from './views/Dashboard';
import SearchListing from './views/SearchListing';
import DoctorProfile from './views/DoctorProfile';
import { ViewType } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.DASHBOARD);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const handleDoctorClick = (id: string) => {
    setSelectedDoctorId(id);
    setView(ViewType.PROFILE);
  };

  const handleBack = () => {
    if (view === ViewType.PROFILE) {
      setView(ViewType.SEARCH);
    } else if (view === ViewType.SEARCH) {
      setView(ViewType.DASHBOARD);
    }
  };

  const renderView = () => {
    switch (view) {
      case ViewType.DASHBOARD:
        return <Dashboard />;
      case ViewType.SEARCH:
        return <SearchListing onDoctorClick={handleDoctorClick} />;
      case ViewType.PROFILE:
        return <DoctorProfile doctorId={selectedDoctorId || ''} onBack={handleBack} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout>
      <div className="relative h-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 relative">
           {renderView()}
        </div>

        {/* Global Nav - Only show on main views, hide on profile for sticky button room */}
        {view !== ViewType.PROFILE && (
          <BottomNav activeView={view} onViewChange={setView} />
        )}
      </div>
    </Layout>
  );
};

export default App;
