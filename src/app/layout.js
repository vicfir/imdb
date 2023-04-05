import Header from './components/Header'
import Navbar from './components/Navbar'
import Providers from './components/Providers'
import './globals.css'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />

          <Navbar />

          {children}
        </Providers>
        
      </body>
    </html>
  )
}
