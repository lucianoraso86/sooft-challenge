"use client";

import { AlertProvider } from "@/hooks/alertProvider/alertContext";
import AlertPopup from "@/components/molecules/alert/alertPopup";
import "./globals.css";

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
