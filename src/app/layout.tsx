"use client";

import { AlertProvider } from "@/hooks/alertProvider/alertContext";
import { Provider } from "react-redux";
import AlertPopup from "@/components/alert/alertPopup";
import store from "@/reduxConfig/store";

import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Sooft Challenge</title>
      </head>
      <body>
        <Provider store={store}>
          <AlertProvider>
            <AlertPopup />
            {children}
          </AlertProvider>
        </Provider>
      </body>
    </html>
  );
}
