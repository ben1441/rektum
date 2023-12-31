import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="flex bg-[#9A6AEC] items-center justify-between h-screen w-screen">
    {/*<div className="flex flex-col items-center justify-center mt-20 w-auto h-auto">*/}
    {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-6" />*/}
    {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-5" />*/}
    {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-7" />*/}
    {/*</div>*/}
    <div className="flex flex-col items-start justify-center ml-10 sm:ml-32 lg:ml-40 gap-6">
      <h1 className="wagmi-gradient font-bold min-[320px]:text-[80px] sm:text-[100px]">Wagmi</h1>
      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elitt</p>
      <Link href="#more">
        <Image src="/learn.svg" alt="Learn More" width={200} height={100} />
      </Link>
      <Link href="#getStarted">
        <Image src="/get-started.svg" alt="Learn More" width={200} height={100} />
      </Link>
    </div>

    {/*<Image src="/wagmi-bg.png" alt="wagmi" width={600} height={0} />*/}
    <div className="fixed -top-[20%] -left-[15%] soft-circle w-[400px] lg:w-[581px] h-[400px] lg:h-[609px] flex-shrink-0"></div>
    <div className="fixed top-[60%] left-[65%] sm:left-[75%] md:left-[85%] soft-circle w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] flex-shrink-0"></div>
    <Image src="/wagmi-pose.png" alt="wagmi" width={200} height={200} className="fixed z-behind bottom-0 right-0" />
  </div>;
}
