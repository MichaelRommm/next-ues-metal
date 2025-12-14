import { blogPosts } from '@/data/blog';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ShareButton from '@/components/ui/ShareButton';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>
}

// Generate static params for existing posts (good SEO)
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Next.js 15+ compatible: params is a Promise
export default async function BlogPost({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            <Header />

            <article className="max-w-3xl mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/articles" className="text-gray-500 hover:text-[#ff6b00] font-medium">
                        &rarr; חזרה למאמרים
                    </Link>
                    <ShareButton title={post.title} />
                </div>

                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm gap-4">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.author}</span>
                    </div>
                </header>

                <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content with hardened styles for mobile legibility */}
                <div
                    className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-900 prose-a:text-[#ff6b00] prose-strong:text-gray-900 prose-li:text-gray-900 prose-ul:text-gray-900 max-w-none text-right text-gray-900 [&_*]:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <hr className="my-12 border-gray-200" />

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                    <h3 className="font-bold text-lg mb-2">אהבתם את המאמר?</h3>
                    <p className="text-gray-600 mb-4">הירשמו לערוץ היוטיוב שלנו לעוד מדריכים והדגמות וידאו.</p>
                    <a href="http://www.youtube.com/@U.E.SMetal" target="_blank" className="inline-block bg-[#ff0000] text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-colors">
                        <i className="fab fa-youtube ml-2"></i> עברו ל-YouTube
                    </a>
                </div>

            </article>

            <Footer />
        </div>
    );
}
