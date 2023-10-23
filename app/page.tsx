import ThemeToggle from "./components/ThemeToggle";
import SigninWithGoogleButton from "./components/SigninWithGoogleButton";

function HomePage() {
  return (
    <div className="bg-[url('/images/data_bkg.svg')]  bg-no-repeat bg-right-bottom bg-cover sm:bg-contain h-screen">
      <div className="w-full lg:w-1/3 h-full bg-opacity-95 lg:bg-opacity-100 overflow-y-scroll backdrop-blur-sm lg:backdrop-blur-none md:border-r border-opacity-40 p-8 flex flex-col bg-base-300">
        <div className="flex flex-col justify-center h-4/5">
          <h2 className="text-4xl font-light mb-4">
            ECE Preschool Interest List Survey
          </h2>
          <p className="text-lg">
            A better way of working with interest list surveys. Search, filter,
            edit & update from any device.
          </p>
          <div className="mt-4">
            <SigninWithGoogleButton />
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
