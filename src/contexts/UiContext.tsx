"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface UiContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: "mobile" | "tablet" | "desktop" | "xl" | "2xl";
}

const UiContext = createContext<UiContextType | undefined>(undefined);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
  const [ui, setUi] = useState<UiContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    breakpoint: "desktop",
  });

  const updateUi = () => {
    const width = window.innerWidth;
    let breakpoint: UiContextType["breakpoint"] = "mobile";

    if (width >= 1536) breakpoint = "2xl";
    else if (width >= 1280) breakpoint = "xl";
    else if (width >= 1024) breakpoint = "desktop";
    else if (width >= 768) breakpoint = "tablet";
    else breakpoint = "mobile";

    setUi({
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
      breakpoint,
    });
  };

  useEffect(() => {
    updateUi();
    window.addEventListener("resize", updateUi);
    return () => window.removeEventListener("resize", updateUi);
  }, []);

  return <UiContext.Provider value={ui}>{children}</UiContext.Provider>;
};

export const useUi = (): UiContextType => {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("useUi must be used within a UiProvider");
  }
  return context;
};
