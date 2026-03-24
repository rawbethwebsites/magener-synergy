import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Mail, Phone, Briefcase, CheckCheck } from 'lucide-react';

async function getInquiries() {
  try {
    return await prisma.inquiry.findMany({ orderBy: { createdAt: 'desc' } });
  } catch {
    return [];
  }
}

async function markRead(id: number) {
  'use server';
  await prisma.inquiry.update({ where: { id }, data: { read: true } });
  revalidatePath('/admin/inquiries');
}

async function markAllRead() {
  'use server';
  await prisma.inquiry.updateMany({ where: { read: false }, data: { read: true } });
  revalidatePath('/admin/inquiries');
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

export default async function AdminInquiriesPage() {
  const inquiries = await getInquiries();
  const unread = inquiries.filter((i) => !i.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Contact Inquiries</h1>
          <p className="text-slate-400 text-sm mt-1">
            {inquiries.length} total
            {unread > 0 && (
              <span className="ml-2 text-[#01afd1] font-medium">· {unread} unread</span>
            )}
          </p>
        </div>
        {unread > 0 && (
          <form action={markAllRead}>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#1a2840] hover:bg-[#1e2d47] text-slate-300 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <CheckCheck className="w-4 h-4" /> Mark all read
            </button>
          </form>
        )}
      </div>

      {inquiries.length === 0 ? (
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-16 text-center">
          <Mail className="w-8 h-8 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-500 text-sm">No inquiries yet.</p>
          <p className="text-slate-600 text-xs mt-1">Contact form submissions will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className={`bg-[#0d1626] border rounded-xl p-6 transition-all ${
                !inquiry.read
                  ? 'border-[#01afd1]/30 shadow-[0_0_0_1px_rgba(1,175,209,0.1)]'
                  : 'border-[#1a2840]'
              }`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#01afd1]/20 flex items-center justify-center text-sm text-[#01afd1] font-bold flex-shrink-0">
                    {inquiry.name[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white font-semibold">{inquiry.name}</p>
                      {!inquiry.read && (
                        <span className="w-2 h-2 bg-[#01afd1] rounded-full" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-1 flex-wrap">
                      <a href={`mailto:${inquiry.email}`} className="flex items-center gap-1 text-slate-400 text-xs hover:text-[#01afd1] transition-colors">
                        <Mail className="w-3 h-3" /> {inquiry.email}
                      </a>
                      {inquiry.phone && (
                        <a href={`tel:${inquiry.phone}`} className="flex items-center gap-1 text-slate-400 text-xs hover:text-[#01afd1] transition-colors">
                          <Phone className="w-3 h-3" /> {inquiry.phone}
                        </a>
                      )}
                      {inquiry.service && (
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Briefcase className="w-3 h-3" /> {inquiry.service}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-xs">{formatDate(inquiry.createdAt)}</span>
                  {!inquiry.read && (
                    <form action={markRead.bind(null, inquiry.id)}>
                      <button
                        type="submit"
                        className="text-xs bg-[#01afd1]/10 hover:bg-[#01afd1]/20 text-[#01afd1] border border-[#01afd1]/30 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Mark read
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <div className="mt-4 pl-14">
                <p className="text-slate-300 text-sm leading-relaxed bg-[#1a2840]/50 rounded-lg px-4 py-3">
                  {inquiry.message}
                </p>
                <div className="flex gap-3 mt-3">
                  <a
                    href={`mailto:${inquiry.email}?subject=Re: Your inquiry to Magener Synergy`}
                    className="text-xs text-[#01afd1] hover:underline"
                  >
                    Reply via email →
                  </a>
                  {inquiry.phone && (
                    <a href={`https://wa.me/${inquiry.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:underline">
                      WhatsApp →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
