import Link from 'next/link'
import { GiConverseShoe } from 'react-icons/gi'
import { MdOutlineExpandMore } from 'react-icons/md'
import { SiJordan } from 'react-icons/si'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'

interface DrawerProps {
  children: React.ReactNode
}

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {drawerOptions.map((Option) => (
            <li key={Option.title}>
              <Link href={`/${Option.slug}`}>
                <a className="justify-between">
                  {Option.title}{' '}
                  <MdOutlineExpandMore className="text-2xl -rotate-90" />
                </a>
              </Link>
            </li>
          ))}
          <li>
            <Link href="https://www.nike.com/gb/jordan">
              <a className="justify-between">
                Jordan
                <SiJordan className="text-2xl" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.converse.com/gb">
              <a className="justify-between">
                Converse
                <GiConverseShoe className="text-2xl" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="justify-between">
                Login <FiLogIn />
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="justify-between">
                Join us <AiOutlineUserAdd />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const drawerOptions: {
  title: string
  slug: string
}[] = [
  {
    title: 'New Releases',
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
  {
    title: 'Up To 50% Off',
    slug: '',
  },
  {
    title: 'Collections',
    slug: '',
  },
]

/*


*/
