import Header from '@/components/header'
import MainPage from '@/components/mainPage'
import { CartProvider } from '@/contexts/CartContext'

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <MainPage />
    </CartProvider>
  )
}
