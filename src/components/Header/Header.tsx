import { Banner } from "./Banner"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full">
      <Banner />
      <nav>Nav</nav>
    </header>
  )
}
