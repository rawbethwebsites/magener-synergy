import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { prisma } from '@/lib/db';
import { Calendar, ArrowLeft } from 'lucide-react';

export const revalidate = 60;

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    if (!post) return {};
    return { title: `${post.title} | Magener Synergy Blog`, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = await prisma.blogPost.findUnique({ where: { slug, published: true } });
  } catch {
    notFound();
  }
  if (!post) notFound();

  return (
    <main className="bg-brand-black text-brand-white min-h-screen">
      <PageHeader
        title={post.title}
        subtitle={post.excerpt}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      {post.coverImage && (
        <div className="relative h-[50vh] w-full overflow-hidden">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
      )}

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
          <article className="lg:col-span-3">
            <div className="flex items-center gap-2 text-brand-silver text-sm mb-8">
              <Calendar className="w-4 h-4" />
              {formatDate(post.createdAt)}
            </div>
            <div
              className="prose prose-invert prose-lg max-w-none text-brand-silver leading-relaxed
                         prose-headings:font-display prose-headings:text-brand-white
                         prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline
                         prose-strong:text-brand-white prose-hr:border-brand-border
                         whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <aside className="space-y-8">
            <div className="bg-brand-charcoal border border-brand-border rounded-2xl p-6 sticky top-28">
              <h3 className="font-display text-lg mb-3">Plan Your Journey</h3>
              <p className="text-brand-silver text-sm mb-5 leading-relaxed">
                Ready to turn inspiration into reality? Our specialists are here to help.
              </p>
              <div className="space-y-3">
                <Button variant="primary" asChild className="w-full justify-center">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-center">
                  <Link href="/chat">Chat with Nova</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
