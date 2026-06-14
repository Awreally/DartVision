import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  )
}
