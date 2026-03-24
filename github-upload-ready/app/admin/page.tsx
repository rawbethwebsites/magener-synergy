import { prisma } from '@/lib/db';
import { FileText, MapPin, MessageSquare, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

async function getStats() {
  try {
    const [posts, destinations, testimonials, inquiries, unread] = await Promise.all([
      prisma.blogPost.count(),
      prisma.destination.count(),
      prisma.testimonial.count(),
      prisma.inquiry.count(),
      prisma.inquiry.count({ where: { read: false } }),
    ]);
    return { posts, destinations, testimonials, inquiries, unread };
  } catch {
    return { posts: 0, destinations: 0, testimonials: 0, inquiries: 0, unread: 0 };
  }
}

async function getRecentInquiries() {
  try {
    return await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });
  } catch {
    return [];
  }
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export default async function AdminDashboard() {
  const [stats, recentInquiries] = await Promise.all([getStats(), getRecentInquiries()]);

  const cards = [
    {
      label: 'Blog Posts',
      value: stats.posts,
      icon: FileText,
      href: '/admin/blog',
      color: '#6366f1',
    },
    {
      label: 'Destinations',
      value: stats.destinations,
      icon: MapPin,
      href: '/admin/destinations',
      color: '#0ea5e9',
    },
    {
      label: 'Testimonials',
      value: stats.testimonials,
      icon: Star,
      href: '/admin/testimonials',
      color: '#f59e0b',
    },
    {
      label: 'Total Inquiries',
      value: stats.inquiries,
      icon: MessageSquare,
      href: '/admin/inquiries',
      color: '#10b981',
      badge: stats.unread > 0 ? `${stats.unread} new` : undefined,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400 text-sm mt-1">
          Manage your website content from here.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-5 hover:border-[#01afd1]/40 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${card.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                {card.badge && (
                  <span className="text-xs bg-green-500/15 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                )}
              </div>
              <p className="text-3xl font-bold text-white mb-1">{card.value}</p>
              <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                {card.label}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Quick actions + Recent inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick actions */}
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-6">
          <h2 className="font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#01afd1]" /> Quick Actions
          </h2>
          <div className="space-y-2">
            {[
              { label: 'Write a new blog post', href: '/admin/blog/new' },
              { label: 'Add a destination', href: '/admin/destinations' },
              { label: 'Add a testimonial', href: '/admin/testimonials' },
              { label: 'View contact inquiries', href: '/admin/inquiries' },
            ].map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center justify-between p-3 rounded-lg bg-[#1a2840]/50 hover:bg-[#1a2840] transition-colors text-sm text-slate-300 hover:text-white"
              >
                {action.label}
                <span className="text-[#01afd1]">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent inquiries */}
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#01afd1]" /> Recent Inquiries
            </h2>
            <Link href="/admin/inquiries" className="text-xs text-[#01afd1] hover:underline">
              View all
            </Link>
          </div>
          {recentInquiries.length === 0 ? (
            <p className="text-slate-500 text-sm text-center py-8">No inquiries yet</p>
          ) : (
            <div className="space-y-3">
              {recentInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#1a2840]/50"
                >
                  <div className="w-8 h-8 rounded-full bg-[#01afd1]/20 flex items-center justify-center text-xs text-[#01afd1] font-bold flex-shrink-0">
                    {inquiry.name[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-white text-sm font-medium">{inquiry.name}</p>
                      {!inquiry.read && (
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-slate-400 text-xs truncate">{inquiry.message}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{formatDate(inquiry.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
