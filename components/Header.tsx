import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const navigationRoutes = ["home", "about"];

export default function Header () {
  const router = useRouter();

  const navigation = navigationRoutes.map((singleRoute) => {
    return (
      <NavigationLink
        key={singleRoute}
        href={`/${singleRoute}`}
        text={singleRoute === "home" ? "Home" : "About Us"}
        router={router}
      />
    )
  })

  return (
    <>
    <header className="w-full bg-gray-300 shadow-xl h-16">
      <div className='flex justify-between items-center max-w-screen-md mx-auto h-16 px-4 lg:px-0'>
      <div className=''>
        <h2 className='font-sans text-xl font-semibold'>Lorem Ipsum Blog</h2>
      </div>

      <nav className="nav-container">
        {navigation}
      </nav>
      </div>
    </header>
    </>
  )
}

function NavigationLink (props: any) {
  const {router, href, text} = props
  const isActive = router.asPath === (href === "/home" ? "/" : href);

  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a 
        href={href === "/home" ? "/" : href}
        className={`${isActive && "nav-item-active"} nav-item ml-4`}>
          {text}
        </a>
    </Link>
  )
}
