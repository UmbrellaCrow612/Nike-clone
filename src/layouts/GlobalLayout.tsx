import { Footer } from "../components/Footer/Footer"
import { Drawer } from "../components/Header/Drawer"
import { Header } from "../components/Header/Header"

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <Drawer>
      <Header />
      <main>{children}</main>
      <Footer />
    </Drawer>
  )
}
