import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

const rubik = Rubik({
	subsets: ["hebrew", "latin"],
	weight: ["300", "400", "500", "700", "900"],
	variable: "--font-rubik",
});

export const metadata: Metadata = {
	title: "U.E.S Metal | עבודות מסגרות וריתוך מומחה",
	description: "פרויקטים מיוחדים בביצוע מומחה. אומנות בברזל, נירוסטה ואלומיניום.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="he" dir="rtl">
			<head>
				{/* FontAwesome */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
			</head>
			<body className={`${rubik.variable} font-rubik antialiased`}>
				{children}
				<AccessibilityWidget />
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-5C3WHD036H"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-5C3WHD036H');
					`}
				</Script>
			</body>
		</html>
	);
}
