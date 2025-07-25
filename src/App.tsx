import "./App.css";
import { AppContext, AppProvider } from "./AppContext";
import { Buttons, Content, Toggle } from "./components";
import { config } from "./config";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Theme } from "./types";

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
