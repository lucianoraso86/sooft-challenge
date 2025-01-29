"use client";

import { AlertProvider } from "@/hooks/alertProvider/alertContext";
import AlertPopup from "@/components/molecules/alert/alertPopup";
import { Provider } from "react-redux";
import  store  from "@/redux/store";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <title>Sooft Challenge</title>
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
