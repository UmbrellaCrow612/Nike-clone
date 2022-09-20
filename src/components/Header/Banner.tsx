import Link from 'next/link'
import { SiJordan } from 'react-icons/si'
import { GiConverseShoe } from 'react-icons/gi'

interface BannerProps {}

export const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="w-full bg-base-200 hidden md:block">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="https://www.nike.com/gb/jordan">
            <a className="btn btn-ghost">
              <SiJordan className="text-xl" />
            </a>
          </Link>
          <Link href="https://www.converse.com/gb">
            <a className="btn btn-ghost">
              <GiConverseShoe className="text-xl" />
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              Help
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {helpOptions.map((Option) => (
                <li key={Option.slug}>
                  <Link href={Option.slug}>
                    <a className={`${Option.isBold && 'font-bold'}`}>
                      {Option.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost">Join us</a>
          </Link>

          <Link href="/">
            <a className="btn btn-ghost">Sign in</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

const helpOptions: {
  title: string
  slug: string
  isBold?: boolean
}[] = [
  {
    title: 'Help',
    slug: 'help',
    isBold: true,
  },
  {
    title: 'Order Status',
    slug: '',
  },
  {
    title: 'Dispatch and Delivery',
    slug: '',
  },
  {
    title: 'Returns',
    slug: '',
  },
  {
    title: 'Size Charts',
    slug: '',
  },
  {
    title: 'Contact Us',
    slug: '',
  },
  {
    title: 'Privacy Policy',
    slug: '',
  },
  {
    title: 'Terms of Sale',
    slug: '',
  },
  {
    title: 'Terms of Use',
    slug: '',
  },
  {
    title: 'Send Us Feedback',
    slug: '',
  },
]
