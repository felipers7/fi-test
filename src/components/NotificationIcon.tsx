import React from 'react';

interface NotificationIconProps {
  hasNotifications: boolean;
  notificationCount: number;
  onClick: () => void;
  isDarkMode: boolean;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  hasNotifications,
  notificationCount,
  onClick,
  isDarkMode
}) => {
  return (
    <div 
      className="notification-icon relative size-12 rounded-lg cursor-pointer flex items-center justify-center"
      onClick={onClick}
      style={{ backgroundColor: isDarkMode ? 'rgba(115,115,115,0.4)' : '#f7f9fa' }}
    >
      <div className="relative">
        <svg 
          className="size-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke={isDarkMode ? "#ffffff" : "#404040"}
          strokeWidth={2}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
          />
        </svg>
        
        {hasNotifications && (
          <div className={`notification-badge animate-pulse-notification`}>
            {notificationCount}
          </div>
        )}
      </div>
    </div>
  );
};