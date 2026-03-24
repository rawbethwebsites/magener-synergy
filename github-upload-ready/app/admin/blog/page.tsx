import { prisma } from '@/lib/db';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { revalidatePath } from 'next/cache';

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });
  } catch {
    return [];
  }
}

async function deletePost(id: number) {
  'use server';
  await prisma.blogPost.delete({ where: { id } });
  revalidatePath('/admin/blog');
}

async function togglePublish(id: number, published: boolean) {
  'use server';
  await prisma.blogPost.update({ where: { id }, data: { published: !published } });
  revalidatePath('/admin/blog');
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="text-slate-400 text-sm mt-1">{posts.length} posts total</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-[#01afd1] hover:bg-[#018cab] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" /> New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl p-16 text-center">
          <p className="text-slate-500 mb-4">No blog posts yet.</p>
          <Link
            href="/admin/blog/new"
            className="text-[#01afd1] text-sm hover:underline"
          >
            Create your first post →
          </Link>
        </div>
      ) : (
        <div className="bg-[#0d1626] border border-[#1a2840] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1a2840]">
                <th className="text-left px-6 py-4 text-slate-400 font-medium">Title</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium hidden md:table-cell">Date</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium">Status</th>
                <th className="text-right px-6 py-4 text-slate-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a2840]">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-[#1a2840]/30 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-medium line-clamp-1">{post.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">{post.excerpt}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-400 hidden md:table-cell">
                    {formatDate(post.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                        post.published
                          ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                          : 'bg-slate-500/15 text-slate-400 border border-slate-500/20'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          post.published ? 'bg-green-400' : 'bg-slate-500'
                        }`}
                      />
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <form action={togglePublish.bind(null, post.id, post.published)}>
                        <button
                          type="submit"
                          className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-[#1a2840] transition-colors"
                          title={post.published ? 'Unpublish' : 'Publish'}
                        >
                          {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </form>
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="p-1.5 text-slate-400 hover:text-[#01afd1] rounded-md hover:bg-[#1a2840] transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={deletePost.bind(null, post.id)}>
                        <button
                          type="submit"
                          className="p-1.5 text-slate-400 hover:text-red-400 rounded-md hover:bg-red-400/10 transition-colors"
                          onClick={(e) => {
                            if (!confirm('Delete this post?')) e.preventDefault();
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
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
