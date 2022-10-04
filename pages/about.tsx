import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import coverImg from '../assets/img/universe.jpeg';
import Image from "next/image";

export default () => {

    return (
        <>

            <Head>
                <title>About Us</title>
                <meta name="description" content="About Us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <main className=" max-w-screen-md mx-auto my-10">
                    <h1 className="border-doubled text-4xl font-medium mb-12 font-sans">
                        About Us
                    </h1>
                </main>

                <div className="w-full relative aspect-w-4 aspect-h-3">
                    <Image
                        src={coverImg}
                        alt="Cover"
                        layout="fill"
                        unoptimized={true}
                        className="object-cover rounded-t"
                    />
                </div>
                <div className="container items-center border-2 shadow-2xl">
                    <p className="pl-4 pt-4 pb-2 pr-2 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque massa risus, faucibus cursus mi vulputate nec. Morbi sagittis vitae urna vestibulum tempus. Pellentesque tellus arcu, auctor id finibus sit amet, laoreet in nulla. Nam sed laoreet lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris iaculis elit id condimentum semper. Aenean pretium velit in nisl vehicula dictum. Duis convallis enim mi, ut suscipit nisi consectetur ut. Proin suscipit diam vitae sagittis sagittis. Nam vitae nulla vehicula, tempor ex eu, dapibus purus. Vestibulum sem est, fermentum nec congue sed, lobortis nec quam. Vivamus venenatis sed est id eleifend. In posuere sed urna eu consequat. Donec tempus, neque et gravida faucibus, mi leo dictum risus, a varius neque ligula quis leo.</p>

                    <p className="pl-4 pt-4 pb-2 pr-2 font-sans">Sed commodo neque at efficitur blandit. Vivamus vel porttitor felis, consectetur tempus ipsum. Sed pharetra rutrum consectetur. Proin feugiat malesuada felis ut aliquet. Proin felis orci, porttitor at orci vel, placerat euismod dui. Ut metus odio, tempor eget imperdiet ac, placerat sed dolor. Phasellus in orci viverra, ullamcorper diam nec, vulputate erat. Mauris tincidunt dui arcu, eleifend hendrerit nisi convallis ullamcorper. Fusce tristique urna at laoreet scelerisque. Sed nisi ex, mattis quis euismod vel, cursus vel erat.</p>

                </div>

                <div className="max-w-md mb-4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div className="flex w-20 h-20 object-cover rounded-full border-2 border-indigo-500">
                        <Image src={coverImg} className="rounded-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold">About Us</h2>
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-xl font-medium text-indigo-500">Lorem Ipsum</a>
                    </div>
                </div>
            </Container>


            <footer className="border-t text-center py-10 text-gray-700 text-sm font-semibold">
                © {new Date().getFullYear()} PostCard Lorim Ipsum blog
            </footer>
        </>
    )
}
