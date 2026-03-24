import { getAdminSession } from '@/lib/auth';
import AdminSidebar from './AdminSidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();

  // Login page — minimal layout, no sidebar
  if (!session) {
    return <div className="min-h-screen bg-[#0a1020]">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#0a1020] text-white">
      <AdminSidebar />
      <main className="flex-1 ml-64 min-h-screen overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
