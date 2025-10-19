"use client";

import QuestionView from "@/views/FirstQuestionView";
import IntermediateView from "@/views/IntermediateView";
import YesMessageView from "@/views/YesMessageView";
import { useState } from "react";

type ViewMode = "question" | "intermediate" | "confirmed";

export default function KissController() {
  const [viewMode, setViewMode] = useState<ViewMode>("question");

  const handleInitialYes = () => {
    setViewMode("intermediate");
  };
  const handleFinalYes = () => {
    setViewMode("confirmed");
  };

  if (viewMode === "intermediate") {
    return <IntermediateView onYesClick={handleFinalYes} />;
  } else if (viewMode === "confirmed") {
    return <YesMessageView />;
  }

  return <QuestionView onYesClick={handleInitialYes} />;
}
