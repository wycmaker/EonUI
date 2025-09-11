import React, { useState, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { cn } from '@/utils/cn';

import { Alert, AlertProps, AlertPosition } from './Alert';

export interface AlertInstance extends AlertProps {
  id: string;
  key: string;
}

interface AlertContainerProps {
  alerts: AlertInstance[];
  onRemove: (id: string) => void;
}

// 位置樣式映射
const getPositionStyles = (position: AlertPosition) => {
  const baseStyles = 'fixed pointer-events-none z-[9999]';

  const positionStyles = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'middle-left': 'top-1/2 left-4 -translate-y-1/2',
    'middle-center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'middle-right': 'top-1/2 right-4 -translate-y-1/2',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
  };

  return cn(baseStyles, positionStyles[position]);
};

// 根據位置分組 alerts
const groupAlertsByPosition = (alerts: AlertInstance[]) => {
  return alerts.reduce(
    (groups, alert) => {
      const position = alert.position || 'top-right';
      if (!groups[position]) {
        groups[position] = [];
      }
      groups[position].push(alert);
      return groups;
    },
    {} as Record<AlertPosition, AlertInstance[]>,
  );
};

const AlertContainer: React.FC<AlertContainerProps> = ({ alerts, onRemove }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const groupedAlerts = groupAlertsByPosition(alerts);

  return createPortal(
    <>
      {Object.entries(groupedAlerts).map(([position, positionAlerts]) => (
        <div
          key={position}
          className={getPositionStyles(position as AlertPosition)}
        >
          <div
            className={cn(
              'flex flex-col gap-2',
              // 垂直排列方向：top 位置往下排，bottom 位置往上排
              position.includes('bottom') ? 'flex-col-reverse' : 'flex-col',
            )}
          >
            {positionAlerts.map((alert) => {
              const { key, ...alertProps } = alert;
              return (
                <Alert
                  key={key}
                  {...alertProps}
                  onClose={() => onRemove(alert.id)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </>,
    document.body,
  );
};

export { AlertContainer };
