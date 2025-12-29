import React, { useState } from "react";
import { StatusHeader } from "./components/StatusHeader";
import { AlertCard } from "./components/AlertCard";
import { MapView } from "./components/MapView";
import { DetailCard } from "./components/DetailCard";
import { ActionButtons } from "./components/ActionButtons";

export default function App() {
  const [alertLevel, setAlertLevel] = useState<
    "safe" | "caution" | "warning" | "critical"
  >("critical");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      {/* iPhone 프레임 */}
      <div className="w-[390px] h-[844px] bg-[#111111] overflow-hidden relative">
        {/* 스크롤 가능한 컨텐츠 영역 */}
        <div className="h-full overflow-y-auto">
          {/* 상단 상태 영역 */}
          <StatusHeader alertLevel={alertLevel} />

          {/* 메인 컨텐츠 */}
          <div className="px-4 pb-6 pt-5 space-y-5">
            {/* (개발용 상태 전환 버튼 제거됨) */}

            {/* 핵심 경고 카드 */}
            <AlertCard alertLevel={alertLevel} />

            {/* 지도 영역 */}
            <MapView />

            {/* 상세 정보 카드 */}
            <DetailCard />

            {/* 하단 행동 버튼 */}
            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
