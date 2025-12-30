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
  >("caution");

  // 재난 시나리오 데이터 정의
  const DISASTER_SCENARIOS = {
    safe: {
      tsunamiHeight: "0.0",
      inundationDepth: "0.0",
      description: "안전합니다. 대피할 필요가 없습니다.",
      safeFloor: "1층",
    },
    caution: {
      tsunamiHeight: "0.2",
      inundationDepth: "0.6", // 0.2 * 3 (2~4배 사이)
      description: "해안가 접근을 자제하고 예의주시하세요.",
      safeFloor: "2층 이상",
    },
    warning: {
      tsunamiHeight: "1.0",
      inundationDepth: "3.0", // 1.0 * 3
      description: "위험 지역에서 즉시 대피 준비하세요.",
      safeFloor: "3층 이상",
    },
    critical: {
      tsunamiHeight: "3.0",
      inundationDepth: "9.0", // 3.0 * 3
      description: "즉시 높은 곳으로 대피하세요!",
      safeFloor: "5층 이상",
    },
  };

  const currentScenario = DISASTER_SCENARIOS[alertLevel];

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
    safe_from_floor: currentScenario.safeFloor,
    id: "2769",
    latitude: 35.1566275,
    longitude: 129.1450724,
  });

  // scenario가 바뀌면 shelterData의 safe_from_floor도 업데이트해야 함
  React.useEffect(() => {
    setShelterData((prev) => ({
      ...prev,
      safe_from_floor: currentScenario.safeFloor,
    }));
  }, [currentScenario.safeFloor]);

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
            <DetailCard 
              tsunamiHeight={currentScenario.tsunamiHeight}
              inundationDepth={currentScenario.inundationDepth}
            />

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
