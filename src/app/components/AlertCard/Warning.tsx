import React from "react";
import { Clock, Building2, ArrowUp } from "lucide-react";
import { levelConfig } from "./config";

export function Warning() {
  const config = levelConfig.warning;

  return (
    <div
      className={`bg-gradient-to-br ${config.bgGradient} border-2 ${config.border} rounded-xl p-5 shadow-xl`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`${config.badgeBg} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}
        >
          {config.badgeText}
        </div>
        <div className={`${config.textColor} text-sm`}>{config.statusText}</div>
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-2 text-gray-300 mb-2">
          <Clock className="w-5 h-5" />
          <span className="text-sm">예상 도달 시간</span>
        </div>
        <div className="text-5xl font-bold text-white">
          약 <span className={config.textColor}>{config.time}</span>분 후
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-2 text-gray-300 mb-2">
          <Building2 className="w-5 h-5" />
          <span className="text-sm">권장 대피 건물</span>
        </div>
        <div className="text-xl font-semibold text-white">
          {config.building}
        </div>
        <div className="text-sm text-gray-400 mt-1">
          {config.buildingDetail}
        </div>
      </div>

      <div
        className={`${config.floorBg} border-2 ${config.floorBorder} rounded-lg p-4 mt-4`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-white/80 mb-1">
              최소 안전 대피 층수
            </div>
            <div className="text-5xl font-black text-white flex items-baseline gap-2">
              <ArrowUp className="w-8 h-8" />
              {config.floor}
              <span className="text-xl">이상</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/80">필수</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warning;
