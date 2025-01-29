"use client";

import "./globals.css";
import { AlertProvider } from "@/hooks/alertProvider/alertContext";
import AlertPopup from "@/components/molecules/alert/alertPopup";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <title>Sooft Challenge</title>
      <body>
        <AlertProvider>
          <AlertPopup />
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
