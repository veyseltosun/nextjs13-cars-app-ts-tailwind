import './globals.css';
import {Footer, Navbar} from "@/components"


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avec  rent a car!',
  description: 'Discover the best cars in the ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' >
        <Navbar/>
         {children}
        <Footer/>
        </body>
    </html>
  )
}
