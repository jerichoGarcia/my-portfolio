import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jericho Garcia | IT Specialist",
  description: "Portfolio of Jericho Garcia, an IT Specialist focused on practical technology solutions and digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
