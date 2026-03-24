import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';
import Link from 'next/link';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function createPost(formData: FormData) {
  'use server';
  const title = formData.get('title') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const coverImage = formData.get('coverImage') as string;
  const published = formData.get('published') === 'on';

  const slug = slugify(title);

  await prisma.blogPost.create({
    data: { title, slug, excerpt, content, coverImage: coverImage || null, published },
  });

  redirect('/admin/blog');
}

export default function NewBlogPostPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">New Blog Post</h1>
        <p className="text-slate-400 text-sm mt-1">Create a new article for your website</p>
      </div>

      <form action={createPost} className="space-y-6">
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Title *</label>
            <input
              type="text"
              name="title"
              required
              placeholder="10 Best Countries for Nigerian Students in 2025"
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Excerpt <span className="text-slate-500">(short description)</span>
            </label>
            <textarea
              name="excerpt"
              required
              rows={2}
              placeholder="A brief summary of the article shown on the blog listing page…"
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Cover Image URL <span className="text-slate-500">(optional)</span>
            </label>
            <input
              type="url"
              name="coverImage"
              placeholder="https://yoursite.com/images/blog-cover.jpg"
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] transition-colors"
            />
            <p className="text-slate-500 text-xs mt-1">
              Upload images via cPanel File Manager and paste the URL here
            </p>
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Content *{' '}
              <span className="text-slate-500">(HTML supported)</span>
            </label>
            <textarea
              name="content"
              required
              rows={18}
              placeholder="<h2>Introduction</h2>&#10;<p>Write your article content here. You can use HTML tags for formatting.</p>&#10;&#10;<h2>Section 2</h2>&#10;<p>More content…</p>"
              className="w-full bg-[#0a1020] border border-[#1e2d47] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#01afd1] transition-colors resize-y font-mono"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="published"
              id="published"
              className="w-4 h-4 accent-[#01afd1]"
            />
            <label htmlFor="published" className="text-slate-300 text-sm cursor-pointer">
              Publish immediately
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#01afd1] hover:bg-[#018cab] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Create Post
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
