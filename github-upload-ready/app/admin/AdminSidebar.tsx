'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  MapPin,
  MessageSquare,
  Star,
  LogOut,
  Globe,
} from 'lucide-react';

const NAV = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { label: 'Destinations', href: '/admin/destinations', icon: MapPin },
  { label: 'Testimonials', href: '/admin/testimonials', icon: Star },
  { label: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#0d1626] border-r border-[#1a2840] flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-[#1a2840]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#01afd1]/20 flex items-center justify-center">
            <Globe className="w-5 h-5 text-[#01afd1]" />
          </div>
          <div>
            <p className="font-bold text-sm text-white leading-tight">Magener Synergy</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {NAV.map(({ label, href, icon: Icon }) => {
          const isActive = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? 'bg-[#01afd1]/15 text-[#01afd1] font-medium'
                  : 'text-slate-400 hover:text-white hover:bg-[#1a2840]'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#1a2840]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all w-full"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
