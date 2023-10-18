"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="mx-4 invert"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-lime-100 border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.png" alt="Rektum" width={36} height={36} />
          <p className="text-red-400 text-4xl p-4 font-bold">Rektum</p>
        </Link>
        <SheetClose asChild>
          <section className="flex h-full flex-col gap-6 pt-16 items-start">
            <SheetClose className="border-none">
              <Link
                href="/"
                className="flex items-center justify-start p-4 gap-4"
              >
                <Image
                  src="/home.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="invert"
                />
                <p className="text-red-400 font-bold text-xl">Home</p>
              </Link>
            </SheetClose>
            <SheetClose className="border-none">
              <Link
                href="#about"
                className="flex items-center justify-start p-4 gap-4"
              >
                <Image
                  src="/job.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="invert"
                />
                <p className="text-red-400 font-bold text-xl">About</p>
              </Link>
            </SheetClose>
            <SheetClose className="border-none">
              <Link
                href="#contact"
                className="flex items-center justify-start p-4 gap-4"
              >
                <Image
                  src="/user.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="invert"
                />
                <p className="text-red-400 font-bold text-xl">Contact</p>
              </Link>
            </SheetClose>
          </section>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
