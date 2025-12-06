import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Gallery from "@/components/landing/Gallery";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<Header />
			<main>
				<Hero />
				<About />
				<Gallery />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
