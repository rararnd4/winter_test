import React from 'react';
import { TriangleAlert, Waves } from 'lucide-react';

interface StatusHeaderProps {
  alertLevel: 'safe' | 'caution' | 'warning' | 'critical';
}

export function StatusHeader({ alertLevel }: StatusHeaderProps) {
  const levelConfig = {
    safe: {
      bg: 'bg-green-900/40',
      border: 'border-green-500',
      text: '안전',
      color: 'text-green-400',
      status: '정상',
    },
    caution: {
      bg: 'bg-yellow-900/40',
      border: 'border-yellow-500',
      text: '주의',
      color: 'text-yellow-400',
      status: '주의 요망',
    },
    warning: {
      bg: 'bg-orange-900/40',
      border: 'border-orange-500',
      text: '경고',
      color: 'text-orange-400',
      status: '경고 발령',
    },
    critical: {
      bg: 'bg-red-900/40',
      border: 'border-red-500',
      text: '심각',
      color: 'text-red-400',
      status: '기상해일 감지됨',
    },
  };

  const config = levelConfig[alertLevel];

  return (
    <div className={`${config.bg} border-b-2 ${config.border} px-4 py-6`}>
      {/* 위험 단계 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${config.bg} border ${config.border}`}>
            <TriangleAlert className={`w-7 h-7 ${config.color}`} />
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">현재 위험 단계</div>
            <div className={`text-2xl font-bold ${config.color}`}>{config.text}</div>
          </div>
        </div>

        {/* 기압 변동 상태 */}
        <div className="flex items-center gap-2">
          <Waves className={`w-6 h-6 ${config.color} animate-pulse`} />
        </div>
      </div>

      {/* 상태 텍스트 */}
      <div className={`text-lg font-semibold ${config.color}`}>
        {config.status}
      </div>
    </div>
  );
}
