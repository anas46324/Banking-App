import React from "react";
import '../../App.css';
import { EditNotifications, ManageAccounts, Payments, PrivacyTip, Security, Translate} from '@mui/icons-material';

const Settings = () =>{

  const settingsOptions = [
    { title: 'Account Settings', icon: <ManageAccounts/> },
    { title: 'Privacy Settings', icon: <PrivacyTip/>},
    { title: 'Notification Settings', icon: <EditNotifications/>},
    { title: 'Language & Region', icon: <Translate/>},
    { title: 'Security Settings', icon: <Security/>},
    { title: 'Payment Methods', icon: <Payments/>},
  ];

    return (
      <div className="accounts-page"> {/* Reusing the shared styling */}
      <h1>Settings</h1>
      <div className="accounts"> {/* Reusing card container styles */}
        {settingsOptions.map((option, index) => (
          <div className="card" key={index}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{option.icon}</div>
            <p>{option.title}</p>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Settings;