import Link from 'next/link'
import { SiNike } from 'react-icons/si'
import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'

import { Banner } from './Banner'
import { FiHeart } from 'react-icons/fi'
import { SubBanner } from './SubBanner'

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

        {/* Desktop options */}
        <div className="items-center hidden gap-3 xl:flex">
          {desktopOptions.map((Option) => (
            <Link href={`/${Option.slug}`} key={Option.title}>
              <a className="btn btn-ghost">{Option.title}</a>
            </Link>
          ))}
        </div>

        {/* Desktop search */}
        <div className="hidden gap-2 xl:flex">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
               <AiOutlineSearch className='text-2xl'/>
              </button>
            </div>
          </div>
          <Link href="/">
            <a className="btn btn-ghost" aria-label="Cart">
              <FiHeart className="text-2xl" />
            </a>
          </Link>
          <Link href="/">
            <a className="btn btn-ghost" aria-label="Cart">
              <AiOutlineShopping className="text-2xl" />
            </a>
          </Link>
        </div>

        {/* Mobile view */}
        <div className="flex items-center gap-1 xl:hidden">
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
      <SubBanner />
    </header>
  )
}

const desktopOptions: {
  title: string
  slug: string
}[] = [
  {
    title: 'New release',
    slug: '',
  },
  {
    title: 'Men',
    slug: '',
  },
  {
    title: 'Women',
    slug: '',
  },
  {
    title: 'Kids',
    slug: '',
  },
]
