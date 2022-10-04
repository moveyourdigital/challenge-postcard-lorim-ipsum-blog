import Link from "next/link";
import { FC, PropsWithChildren } from "react";


const Header: FC<
  PropsWithChildren<
    any
  >
> = (props) => {
  const {
    children
  } = props

  return (
    <>
      <nav className="flex items-center bg-black justify-between flex-wrap bg-teal p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Lorem Ipsum Blog</span>
        </div>
        <div className="w-full block flex-grow lg:flex px-10 lg:w-auto">
          <div className="text-sm mt-2 mb-2 lg:flex-grow justify-items-end">
            <a className="ml-2 text-white pt-2 pb-2 pr-2 pl-2 hover:bg-gray-700 hover:text-white rounded-md font-sans font-semibold antialiased">
              <Link href="/">Home</Link>
            </a>
            <span className="ml-2 text-white pt-2 pb-2 pr-2 pl-2 hover:bg-gray-700 hover:text-white rounded-md font-sans font-semibold antialiased">
              <Link href="/about">About Us</Link>
            </span>
          </div>
        </div>
      </nav>

      {children}

    </>
  )
}

export default Header