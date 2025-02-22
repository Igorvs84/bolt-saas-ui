import { UserNav } from '@/components/user-nav';

export function DesktopHeader() {
  return (
    <header className="hidden md:block border-b fixed top-0 left-64 right-0 h-16">
      <div className="container flex h-full items-center justify-end px-4">
        <UserNav />
      </div>
    </header>
  );
}
