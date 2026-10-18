import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MatchScoreCircle = ({ score = 88, size = 160, strokeWidth = 14, showLabel = true }) => {
  const { t } = useLanguage();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (s) => {
    if (s >= 85) return { stroke: '#059669', bg: '#d1fae5', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800' };
    if (s >= 75) return { stroke: '#2563eb', bg: '#dbeafe', text: 'text-brand-700', badge: 'bg-blue-100 text-blue-800' };
    return { stroke: '#d97706', bg: '#fef3c7', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' };
  };

  const colors = getColor(score);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors.stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center score content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {score}%
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('common.match')}
          </span>
        </div>
      </div>

      {showLabel && (
        <div className="mt-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
            {score >= 85 ? t('common.bestMatch') : t('common.recommended')}
          </span>
        </div>
      )}
    </div>
  );
};
