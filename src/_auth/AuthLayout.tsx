import { BackgroundBeams } from "@/components/ui/background-beams";
import { Outlet, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";
import { LampContainer } from "@/components/ui/lamp";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="h-screen w-full lg:w-2/3 rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 mb-10">
              <h1 className="relative z-10 text-lg lg:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Welcome to <br />
                Work Hive
              </h1>
              <p></p>
              <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                We at Work Hive give you the best platform <br />
                to share your DEV Journey <br />
                Start looking for your next JOB <br />
                at our Job Board
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full z-10">
              <Outlet />
            </div>
          </div>

          <div className="lg:flex flex-col w-2/4 hidden bg-dot-white/[0.1] justify-center ">
            <div className="rounded-md flex flex-col antialiase  justify-center items-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
            <div className="h- rounded-md flex flex-col antialiase justify-center items-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
              />
            </div>
          </div>

          <BackgroundBeams />
        </>
      )}
    </>
  );
};

export default AuthLayout;
