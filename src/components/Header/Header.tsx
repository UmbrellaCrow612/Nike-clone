import Link from 'next/link'
import { SiNike } from 'react-icons/si'
import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'

import { Banner } from './Banner'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full">
      <Banner />
      <nav className="justify-between max-w-screen-xl px-4 mx-auto navbar ">
        <Link href="/">
          <a className="btn btn-ghost" aria-label="Home">
            <SiNike className="text-6xl" />
          </a>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/">
            <a className="btn btn-ghost" aria-label="Cart">
              <AiOutlineShopping className="text-2xl" />
            </a>
          </Link>
          <Link href="/">
            <a className="btn btn-ghost" aria-label="Search">
              <AiOutlineSearch className="text-2xl" />
            </a>
          </Link>

          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
            <AiOutlineMenu className="text-2xl" />
          </label>
        </div>
      </nav>
    </header>
  )
}
