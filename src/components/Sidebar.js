import React from 'react';
import './Sidebar.css'; // Sidebar styles
import { AccountBalance, Paid, Dashboard, Settings, Menu } from '@mui/icons-material';

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <Menu/>
      <ul>
      <li onClick={() => onMenuClick ('dashboard')}>
        <Dashboard/>
      </li>
        <li onClick={() => onMenuClick ('accountManagement')}>
          <AccountBalance/></li>
        <li onClick={() => onMenuClick ('AccAggrMgmt')}>
          <Paid/>
        </li>
        <li onClick={() => onMenuClick ('settings')}>
          <Settings/></li>
      </ul>
    </div>
  );
};

export default Sidebar;
