"use client";

import EntrepreneurDashboard from "@/components/EntrepreneurDashboard";
import ExpertDashboard from "@/components/ExpertDashboard";
import { useState } from "react";

export default function DashboardScreen() {
  const [userType, setUserType] = useState<"Entrepreneur" | "Expert">(
    "Entrepreneur"
  );
  if (userType === "Entrepreneur") return <EntrepreneurDashboard />;
  if (userType === "Expert") return <ExpertDashboard />;
}
