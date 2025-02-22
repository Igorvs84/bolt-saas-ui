'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarNav } from '@/components/sidebar';
import { UserNav } from './user-nav';

export function MobileHeader() {
  return (
    <div className="md:hidden border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarNav />
          </SheetContent>
        </Sheet>
        <UserNav />
      </div>
    </div>
  );
}
