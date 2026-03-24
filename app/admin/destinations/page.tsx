import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Trash2, Plus, CheckCircle } from 'lucide-react';

async function getDestinations() {
  try {
    return await prisma.destination.findMany({ orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }] });
  } catch {
    return [];
  }
}

async function createDestination(formData: FormData) {
  'use server';
  const name = formData.get('name') as string;
  const country = formData.get('country') as string;
  const tag = formData.get('tag') as string;
  const description = formData.get('description') as string;
  const highlights = formData.get('highlights') as string;
  const image = formData.get('image') as string;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  await prisma.destination.create({
    data: { name, country, slug, tag, description, highlights, image: image || null },
  });
  revalidatePath('/admin/destinations');
}

async function deleteDestination(id: number) {
  'use server';
  await prisma.destination.delete({ where: { id } });
  revalidatePath('/admin/destinations');
}

export default async function AdminDestinationsPage() {
  const destinations = await getDestinations();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Destinations</h1>
        <p className="text-slate-400 text-sm mt-1">Manage destination cards shown on your website</p>
      </div>

      {/* Add Form */}
      <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-white mb-5 flex items-center gap-2">
          <Plus className="w-4 h-4 text-[#01afd1]" /> Add Destination
        </h2>
        <form action={createDestination} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-400 text-xs font-medium mb-1">City Name *</label>
            <input name="name" required placeholder="e.g. London" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1]" />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-medium mb-1">Country *</label>
            <input name="country" required placeholder="e.g. United Kingdom" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1]" />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-medium mb-1">Tag *</label>
            <input name="tag" required placeholder="e.g. Study & Leisure" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1]" />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-medium mb-1">Image URL</label>
            <input name="image" type="url" placeholder="https://…/image.jpg" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1]" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-400 text-xs font-medium mb-1">Description *</label>
            <textarea name="description" required rows={2} placeholder="Brief description of the destination…" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] resize-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-400 text-xs font-medium mb-1">
              Highlights <span className="text-slate-500">(one per line)</span>
            </label>
            <textarea name="highlights" rows={3} placeholder="Top-ranked universities&#10;World-class museums&#10;Strong visa pathways" className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-3 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] resize-none" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-[#01afd1] hover:bg-[#018cab] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Add Destination
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      {destinations.length === 0 ? (
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-12 text-center">
          <p className="text-slate-500 text-sm">No custom destinations added yet.</p>
          <p className="text-slate-600 text-xs mt-2">The website shows static destinations by default.</p>
        </div>
      ) : (
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1a2840]">
                <th className="text-left px-6 py-4 text-slate-400 font-medium">Destination</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium hidden md:table-cell">Tag</th>
                <th className="text-right px-6 py-4 text-slate-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a2840]">
              {destinations.map((dest) => (
                <tr key={dest.id} className="hover:bg-[#1a2840]/30 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-medium">{dest.name}</p>
                    <p className="text-slate-500 text-xs">{dest.country}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-400 hidden md:table-cell">
                    <span className="bg-[#1a2840] px-2 py-1 rounded text-xs">{dest.tag}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <form action={deleteDestination.bind(null, dest.id)} className="inline">
                      <button
                        type="submit"
                        className="p-1.5 text-slate-400 hover:text-red-400 rounded-md hover:bg-red-400/10 transition-colors"
                        onClick={(e) => { if (!confirm('Delete this destination?')) e.preventDefault(); }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
