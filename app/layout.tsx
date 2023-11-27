import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './footer/page'
import LivingBlur from './components/livingBlur';
import StaticBlur from './components/staticBlur';
import { Metadata, Viewport } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: "black",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Edubuk eSeal dApp',
  description: 'Edubuk eSealing dApp powered by Concordium Blockchain',
  keywords: ['Edubuk', 'edubuk', 'edubuk.io', 'concordium', 'Concordium blockchain', 'edubukeseal', 'edubuk eseal', 'edubukesealing', 'edubuk esealing', 'eseal', 'esealing', 'dapp', 'eseal dapp', 'esealing dapp', 'Shivani Mehrorta', 'Apoorva Bajaj', 'Concordium', 'Next.js', 'nextjs', 'rust', 'smart contract', 'smart', 'contract'],
  creator: 'Edubuk',
  appleWebApp: {
    title: 'Edubuk eSeal dApp',
    statusBarStyle: 'black-translucent',
  },
  generator: 'Next.js TypeScript Rust WebAssembly'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans subpixel-antialiased`}>
        <LivingBlur />
        <StaticBlur />
        {children}
        <Footer />
      </body>
    </html>
  )
}
