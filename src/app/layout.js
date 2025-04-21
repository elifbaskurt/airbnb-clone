import "./globals.css";
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb Clone uygulaması" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {/* children prop'u sayfa içeriğini temsil eder */}
          {children}
        </main>
      </body>
    </html>
  );
}
