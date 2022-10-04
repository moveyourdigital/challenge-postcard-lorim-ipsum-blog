import Head from "next/head";
import Link from "next/link";

export default () => {

    return (
        <>

            <Head>
                <title>About Us</title>
                <meta name="description" content="About Us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" max-w-screen-md mx-auto my-10">
                <h1 className=" text-6xl font-medium mb-12 font-thin">
                    About Us
                </h1>
            </main>

            <footer className="border-t text-center py-10 text-gray-700 text-sm font-semibold">
                © {new Date().getFullYear()} PostCard Lorim Ipsum blog
            </footer>
        </>
    )
}
