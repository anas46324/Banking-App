// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/dashboard';
import Settings from './components/settings/settings';
import AccountManagement from './components/transactions/transactions';
import AccAggrMgmt from './components/AccountAggregation/AccountAggregation';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard'); // Default to 'dashboard'

  const renderComponent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'settings':
        return <Settings />;
        case 'accountManagement':
        return <AccountManagement/>;
        case 'AccAggrMgmt':
        return <AccAggrMgmt/>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Sidebar onMenuClick={setCurrentPage} />
      <div class="App">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
