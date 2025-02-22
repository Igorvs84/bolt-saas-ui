'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, Settings, BarChart, Plug, LifeBuoy, Wallet } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Профиль', href: '/profile', icon: Settings },
  { name: 'Подписки', href: '/subscriptions', icon: Wallet },
  { name: 'Аналитика', href: '/reports', icon: BarChart },
  { name: 'Команда', href: '/team', icon: Users },
  { name: 'Интеграции', href: '/integrations', icon: Plug },
  { name: 'Поддержка', href: '/support', icon: LifeBuoy },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      <div className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all',
                pathname === item.href 
                  ? 'bg-accent text-accent-foreground' 
                  : 'text-muted-foreground hover:bg-accent/50'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
