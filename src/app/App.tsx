import React, { useState } from "react";
import { StatusHeader } from "./components/StatusHeader";
import { AlertCard } from "./components/AlertCard";
import { MapView } from "./components/MapView";
import { DetailCard } from "./components/DetailCard";
import { ActionButtons } from "./components/ActionButtons";
import { RouteModal } from "./components/RouteModal";
import { BuildingInfoModal } from "./components/BuildingInfoModal";

export default function App() {
  const [alertLevel, setAlertLevel] = useState<
    "safe" | "caution" | "warning" | "critical"
  >("critical");
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  // API로 불러올 데이터를 시뮬레이션하는 상태
  const [shelterData, setShelterData] = useState({
    // 기존 구조 유지하되 값만 교체
    building_name: "해운대두산위브더제니스아파트",
    // RouteModal 등에서 사용하는 간단한 'name' 필드도 추가
    name: "해운대두산위브더제니스아파트",
    road_address: "부산광역시 해운대구 마린시티2로 33",
    // UI는 '층' 문자열을 기대하므로 문자열로 유지
    safe_from_floor: "1층",
    id: "2769",
    latitude: 35.1566275,
    longitude: 129.1450724,
  });

  const [showRouteModal, setShowRouteModal] = useState(false);
  const [showBuildingInfoModal, setShowBuildingInfoModal] = useState(false);
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
            <AlertCard alertLevel={alertLevel} shelterData={shelterData} />

            {/* 지도 영역 */}
            <MapView
              onLocationChange={setUserLocation}
              shelterData={shelterData}
            />

            {/* 상세 정보 카드 */}
            <DetailCard />

            {/* 하단 행동 버튼 */}
            <ActionButtons
              userLocation={userLocation}
              onShowRoute={() => setShowRouteModal(true)}
              onShowBuildingInfo={() => setShowBuildingInfoModal(true)}
              shelterData={shelterData}
            />
          </div>
        </div>
        {/* 경로 표시 모달 */}
        <RouteModal
          show={showRouteModal}
          onClose={() => setShowRouteModal(false)}
          userLocation={userLocation}
          shelterData={shelterData}
        />
        {/* 건물 정보 표시 모달 */}
        <BuildingInfoModal
          show={showBuildingInfoModal}
          onClose={() => setShowBuildingInfoModal(false)}
          shelterData={shelterData}
        />
      </div>
    </div>
  );
}
