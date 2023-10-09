import Link from "next/link";
import React from "react";
import ThemeToggle from "../ThemeToggle";
import { AiFillSetting } from "react-icons/ai";
import { TbLogin, TbLogout } from "react-icons/tb";
import { AiFillDatabase } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  let avatarSrc;
  if (session && session.user && session.user.image) {
    avatarSrc = session.user.image;
  }

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 navbar">
        <div className="flex-1">
          <Link
            className="btn btn-ghost no-animation normal-case text-xl"
            href="/dashboard"
          >
            ECE Preschool Interst List
          </Link>
        </div>
        <div className="flex-none">
          <ul tabIndex={0} className="flex space-x-4 mr-4">
            <li>
              <Link className="btn" href="/dashboard/settings">
                <AiFillSetting className="h-6 w-6" />
                Settings
              </Link>
            </li>
            <li>
              <Link className="btn" href="/dashboard">
                <AiFillDatabase className="h-6 w-6" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="btn" href="/api/auth/signout">
                <TbLogout className="h-6 w-6" />
                Logout
              </Link>
            </li>
          </ul>
          <div className="py-2">
            <ThemeToggle />
          </div>
          <div className="avatar ml-4">
            <div className="w-9 rounded-full">
              {avatarSrc && <img src={session!.user!.image!} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
