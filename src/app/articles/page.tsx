import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

export default function BlogList() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">מאמרים מקצועיים</h1>
                    <p className="text-xl text-gray-600">מאמרים, טיפים ומדריכים מעולם המתכת</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="text-sm text-[#ff6b00] font-bold mb-2">{post.date}</div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[#ff6b00] transition-colors">
                                    <Link href={`/articles/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link href={`/articles/${post.slug}`} className="text-[#ff6b00] font-bold hover:underline self-start mt-auto">
                                    קרא עוד &larr;
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
