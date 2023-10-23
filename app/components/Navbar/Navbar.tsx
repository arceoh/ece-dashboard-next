"use client";
import { Disclosure } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillDatabase,
  AiFillSetting,
  AiOutlineCloseCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import ThemeToggle from "../ThemeToggle";

interface NavLinks {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navigation: NavLinks[] = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <AiFillSetting className="h-6 w-6 hidden lg:block" />,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <AiFillDatabase className="h-6 w-6 hidden lg:block" />,
  },
  {
    name: "Sign Out",
    href: "/api/auth/signout",
    icon: <TbLogout className="h-6 w-6 hidden lg:block" />,
  },
];

export default function Example() {
  const { status, data: session } = useSession();

  let avatarSrc: string;
  if (session && session.user && session.user.image) {
    avatarSrc = session.user.image;
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="navbar bg-primary text-primary-content">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 navbar">
              <div className="flex-1">
                <Link
                  className="btn-xs md:btn-lg btn-ghost  btn  no-animation"
                  href="/dashboard"
                >
                  ECE Pre-K Interst List
                </Link>
              </div>
              <div className="flex-none hidden md:flex">
                <ul tabIndex={0} className="flex space-x-4 mr-4">
                  {navigation.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link className="btn btn-sm lg:btn-md" href={item.href}>
                          {item.icon}
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="space-x-5">
                <div className="py-2">
                  <ThemeToggle />
                </div>
                <div className="avatar">
                  <div className="w-9 rounded-full">
                    <Image src={avatarSrc} width={500} height={500} alt="" />
                  </div>
                </div>
                <Disclosure.Button className="btn btn-ghost text-xl md:hidden">
                  {open && <AiOutlineCloseCircle />}
                  {!open && <AiOutlineMenu />}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="bg-base-300 md:hidden">
            <ul tabIndex={0} className="">
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      className="btn btn-block rounded-none flex justify-start"
                      href={item.href}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
