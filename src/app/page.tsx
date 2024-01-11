import { Discord } from '@/components/Discord'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Jumbotron } from '@/components/Jumbotron'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Jumbotron />
      <Features />
      <Discord />
      <Footer />
    </main>
  )
}
