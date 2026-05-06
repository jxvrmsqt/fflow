import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export default function Card({ title, icon, className = '', children }: CardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 p-4 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-gray-700">{icon}</div>}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      {children && <div className="text-gray-700">{children}</div>}
    </div>
  );
}
