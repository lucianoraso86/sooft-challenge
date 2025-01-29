"use client";

import { AlertProvider } from "@/hooks/alertProvider/alertContext";
import AlertPopup from "@/components/molecules/alert/alertPopup";
import Home from "@/components/pages/home";

const App = () => {
  return (
    <AlertProvider>
      <AlertPopup />
      <Home />
    </AlertProvider>
  );
};

export default App;
