import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SidebarNav } from '@/components/sidebar';
import { MobileHeader } from '@/components/mobile-header';
import { DesktopHeader } from '@/components/desktop-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Service management interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:flex">
          {/* Desktop Sidebar */}
          <div className="hidden md:block fixed h-full w-64 border-r">
            <SidebarNav />
          </div>

          {/* Header (Mobile and Desktop) */}
          <DesktopHeader />
          <MobileHeader />

          {/* Main Content */}
          <main className="md:ml-64 flex-1 min-h-screen p-8 pt-16 md:pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
