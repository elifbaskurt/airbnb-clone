import "./globals.css";
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import MapComponent from '@/components/MapComponent/MapComponent'
import Footer from '@/components/Footer/Footer'
import WelcomeModal from '@/components/Modal/WelcomeModal'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb Clone uygulaması" />
      </head>
      <body className={inter.className}>
        <WelcomeModal />
        <Header />
        <main>
          {/* children prop'u sayfa içeriğini temsil eder */}
          {children}
          <MapComponent />
        </main>
        <Footer />
      </body>
    </html>
  );
}
