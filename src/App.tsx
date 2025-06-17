import { useContext, useEffect, useState } from "react";

import { Buttons, Content, Toggle } from "./components";
import styled from "styled-components";
import { Theme } from "./types";

import "./App.scss";
import { AppContext, AppProvider } from "./AppContext";
import { config } from "./config";
import TraceIcon from "./components/TraceIcon";

const Container = styled.div<{ $theme: Theme }>`
  transition: background-color 0.5s linear;
  position: absolute;
  background-color: ${({ $theme }) => $theme.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

function AppContent() {
  const { theme } = useContext(AppContext);

  return (
    <main className="app">
      <Toggle />
      <Content />
      <Buttons />
      {/* Background container to apply theme background */}
      {/* This is necessary to ensure the background is applied correctly */}
      {/* and does not interfere with the content layout */}
      <Container $theme={theme} />
    </main>
  );
}

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery =
      "(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)";
    const mediaQueryList = window.matchMedia(mediaQuery);

    const updateIsMobile = () => {
      setIsMobile(mediaQueryList.matches);
    };

    updateIsMobile();

    mediaQueryList.addEventListener("change", updateIsMobile);

    return () => {
      mediaQueryList.removeEventListener("change", updateIsMobile);
    };
  }, []);

  return (
    <AppProvider config={config} isMobile={isMobile}>
      <AppContent />
    </AppProvider>
  );
};
