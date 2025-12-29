import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export function MapView() {
  return (
    <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl overflow-hidden">
      {/* 지도 헤더 */}
      <div className="bg-[#222222] px-4 py-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">대피 경로 지도</div>
          <div className="flex items-center gap-1 text-xs text-blue-400">
            <Navigation className="w-4 h-4" />
            <span>현재 위치</span>
          </div>
        </div>
      </div>

      {/* 간단한 지도 시각화 */}
      <div className="relative h-48 bg-gradient-to-b from-gray-800 to-gray-900">
        {/* 도로/격자 패턴 */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* 침수 예상 지역 오버레이 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-600/40 to-transparent">
          <div className="absolute bottom-2 left-2 text-xs text-red-300 bg-red-900/80 px-2 py-1 rounded">
            침수 예상 지역
          </div>
        </div>

        {/* 현재 위치 표시 */}
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500/30 rounded-full animate-ping"></div>
            <div className="relative bg-blue-500 rounded-full p-2 border-2 border-white">
              <Navigation className="w-4 h-4 text-white" fill="white" />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs bg-blue-600 text-white px-2 py-1 rounded">
              현재 위치
            </div>
          </div>
        </div>

        {/* 대피 건물 표시 */}
        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2">
          <div className="relative">
            <div className="bg-green-500 rounded-full p-2 border-2 border-white shadow-lg">
              <MapPin className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs bg-green-600 text-white px-2 py-1 rounded">
              대피 건물
            </div>
          </div>
        </div>

        {/* 경로 선 */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 130 95 Q 200 70 270 60"
            stroke="#10b981"
            strokeWidth="3"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* 지도 범례 */}
      <div className="bg-[#222222] px-4 py-3 border-t border-gray-700 flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-400">현재 위치</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400">대피 건물</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500/60 rounded"></div>
          <span className="text-gray-400">침수 예상</span>
        </div>
      </div>
    </div>
  );
}
