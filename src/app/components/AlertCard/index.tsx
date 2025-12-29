import React from "react";
import { Safe } from "./Safe.tsx";
import { Caution } from "./Caution.tsx";
import { Warning } from "./Warning.tsx";
import { Critical } from "./Critical.tsx";

export type AlertLevel = "safe" | "caution" | "warning" | "critical";

interface AlertCardProps {
  alertLevel: AlertLevel;
}

export function AlertCard({ alertLevel }: AlertCardProps) {
  switch (alertLevel) {
    case "safe":
      return <Safe />;
    case "caution":
      return <Caution />;
    case "warning":
      return <Warning />;
    case "critical":
      return <Critical />;
    default:
      return <Safe />;
  }
}

export default AlertCard;
