import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AboutImage from '../img/about.png'

export default function About () {
    return (
        <>
        <Head>
            <title>The PostCard Blog</title>
            <meta name="description" content="A random collections of lorem ipsum posts" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="px-4 lg:px-0" id="about-page">
            <h1 className="font-sans text-3xl mb-12 font-thin max-w-screen-md mx-auto my-10">
            We are <Link href="/" passHref><a className="font-semibold">PostCard Lorim Ipsum</a></Link> blog
            </h1>

            <div className="w-full h-96 relative">
                <Image 
                    src={AboutImage}
                    alt={"About us"}
                    layout="fill"
                    unoptimized={true}
                    className="object-contain object-center rounded-t"
                />
            </div>

            <p className="max-w-screen-md mx-auto my-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis saepe ducimus assumenda quisquam doloremque praesentium blanditiis, sed, perspiciatis animi inventore natus repudiandae eum sequi distinctio rem sit et? Sit, quis?
            </p>

            <p className="max-w-screen-md mx-auto my-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quidem autem cupiditate sequi, quod consequuntur magnam possimus laboriosam, deleniti repudiandae natus sed dolorum voluptatibus facilis placeat perferendis consectetur harum. Suscipit!
            </p>

            <p className="max-w-screen-md mx-auto my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit, sit error quo voluptate ipsum ullam, sequi at magni sint aspernatur quasi cum! Nemo porro corporis consequuntur dolores cumque voluptatum.
            </p>
        </main>
        </>
    )
}