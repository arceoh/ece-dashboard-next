"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./components/ThemeToggle";
import SigninWithGoogleButton from "./components/SigninWithGoogleButton";

function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard"); // Replace with the desired destination
    }
  }, [session, router]);

  return (
    <div className="bg-[url('/images/data_bkg.svg')]  bg-no-repeat bg-right-bottom bg-cover sm:bg-contain h-screen">
      <div className="w-1/3 h-full overflow-y-scroll backdrop-blur-sm   md:border-r border-opacity-40   p-8 flex flex-col bg-base-300">
        <div>
          <div>
            <h2 className="text-4xl font-light mb-4">
              ECE Preschool Interest List Survey
            </h2>
            <p className="text-lg">
              A better way of working with interest list surveys. Search,
              filter, edit & update from any device.
            </p>
            <div className="mt-4">
              <SigninWithGoogleButton />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default HomePage;
