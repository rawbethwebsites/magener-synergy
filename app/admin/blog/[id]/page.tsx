import { notFound, redirect } from 'next/navigation';
import { prisma } from '@/lib/db';
import Link from 'next/link';

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function updatePost(id: number, formData: FormData) {
  'use server';
  const title = formData.get('title') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const coverImage = formData.get('coverImage') as string;
  const published = formData.get('published') === 'on';

  await prisma.blogPost.update({
    where: { id },
    data: { title, slug: slugify(title), excerpt, content, coverImage: coverImage || null, published },
  });

  redirect('/admin/blog');
}

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let post;
  try {
    post = await prisma.blogPost.findUnique({ where: { id: parseInt(id) } });
  } catch {
    notFound();
  }
  if (!post) notFound();

  const action = updatePost.bind(null, post.id);

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Edit Post</h1>
        <p className="text-slate-400 text-sm mt-1 truncate">{post.title}</p>
      </div>

      <form action={action} className="space-y-6">
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Title *</label>
            <input
              type="text"
              name="title"
              required
              defaultValue={post.title}
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#01afd1] transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Excerpt *</label>
            <textarea
              name="excerpt"
              required
              rows={2}
              defaultValue={post.excerpt}
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#01afd1] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Cover Image URL <span className="text-slate-500">(optional)</span>
            </label>
            <input
              type="url"
              name="coverImage"
              defaultValue={post.coverImage || ''}
              placeholder="https://…"
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Content * <span className="text-slate-500">(HTML supported)</span>
            </label>
            <textarea
              name="content"
              required
              rows={18}
              defaultValue={post.content}
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#01afd1] transition-colors resize-y font-mono"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="published"
              id="published"
              defaultChecked={post.published}
              className="w-4 h-4 accent-[#01afd1]"
            />
            <label htmlFor="published" className="text-slate-300 text-sm cursor-pointer">
              Published
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#01afd1] hover:bg-[#018cab] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Save Changes
          </button>
          <Link
            href="/admin/blog"
            className="bg-[#1a2840] hover:bg-[#1e2d47] text-slate-300 font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
