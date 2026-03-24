import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Trash2, Plus, Star } from 'lucide-react';

async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
  } catch {
    return [];
  }
}

async function createTestimonial(formData: FormData) {
  'use server';
  const name = formData.get('name') as string;
  const role = formData.get('role') as string;
  const quote = formData.get('quote') as string;
  const rating = parseInt(formData.get('rating') as string) || 5;
  const featured = formData.get('featured') === 'on';

  await prisma.testimonial.create({ data: { name, role, quote, rating, featured } });
  revalidatePath('/admin/testimonials');
}

async function deleteTestimonial(id: number) {
  'use server';
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath('/admin/testimonials');
}

async function toggleFeatured(id: number, featured: boolean) {
  'use server';
  await prisma.testimonial.update({ where: { id }, data: { featured: !featured } });
  revalidatePath('/admin/testimonials');
}

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Testimonials</h1>
        <p className="text-slate-400 text-sm mt-1">Manage client testimonials shown on your website</p>
      </div>

      {/* Add Form */}
      <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-white mb-5 flex items-center gap-2">
          <Plus className="w-4 h-4 text-[#01afd1]" /> Add Testimonial
        </h2>
        <form action={createTestimonial} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-400 text-xs font-medium mb-1">Client Name *</label>
            <input name="name" required placeholder="e.g. Amara Okafor" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1]" />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-medium mb-1">Role / Location *</label>
            <input name="role" required placeholder="e.g. Student, Lagos" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1]" />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-medium mb-1">Rating (1–5)</label>
            <select name="rating" defaultValue="5" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#01afd1]">
              <option value="5">★★★★★ (5)</option>
              <option value="4">★★★★ (4)</option>
              <option value="3">★★★ (3)</option>
            </select>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <input type="checkbox" name="featured" id="feat" defaultChecked className="w-4 h-4 accent-[#01afd1]" />
            <label htmlFor="feat" className="text-slate-300 text-sm cursor-pointer">Show on homepage</label>
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-400 text-xs font-medium mb-1">Testimonial *</label>
            <textarea name="quote" required rows={3} placeholder="What the client said about your services…" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] resize-none" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-[#01afd1] hover:bg-[#018cab] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Add Testimonial
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      {testimonials.length === 0 ? (
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-12 text-center">
          <p className="text-slate-500 text-sm">No testimonials added yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <form action={toggleFeatured.bind(null, t.id, t.featured)}>
                    <button
                      type="submit"
                      className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                        t.featured
                          ? 'bg-[#01afd1]/15 text-[#01afd1] border border-[#01afd1]/30'
                          : 'bg-[#1a2840] text-slate-400 border border-[#1e2d47]'
                      }`}
                    >
                      {t.featured ? 'Featured' : 'Hidden'}
                    </button>
                  </form>
                  <form action={deleteTestimonial.bind(null, t.id)}>
                    <button
                      type="submit"
                      className="p-1.5 text-slate-400 hover:text-red-400 rounded hover:bg-red-400/10 transition-colors"
                      onClick={(e) => { if (!confirm('Delete testimonial?')) e.preventDefault(); }}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < t.rating ? 'text-[#01afd1] fill-[#01afd1]' : 'text-slate-700'}`}
                  />
                ))}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">&quot;{t.quote}&quot;</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
