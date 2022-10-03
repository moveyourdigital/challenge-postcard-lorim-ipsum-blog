import Link from 'next/link'

export default function Header () {
    return(
    <>
    <header className="w-full bg-gray-300 shadow-xl h-16">
      <div className='flex justify-between items-center max-w-screen-md mx-auto h-16 px-4 lg:px-0'>
      <div className=''>
        <h2 className='font-sans text-xl font-semibold'>Lorem Ipsum Blog</h2>
      </div>

      <nav>
        <ul className="">
          <li><Link href="/"><a>Home</a></Link></li>
        </ul>
      </nav>
      </div>
    </header>
    </>
    )
}