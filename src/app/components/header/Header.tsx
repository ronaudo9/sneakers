"use client";
import Image from "next/image";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useHooks } from "./hooks";
export const Header = () => {
  const { isClose, setIsClose } = useHooks();
  return (
    <>
      {isClose && (
        <>
          <div>
            <div
              className=" fixed inset-0 z-10 cursor-pointer bg-gray-900 opacity-75"
              onClick={() => setIsClose(false)}
            />
            <CloseIcon
              className="fixed right-9 top-5 z-30 size-8 cursor-pointer text-white"
              onClick={() => setIsClose(false)}
            />
            <div className="fixed inset-y-0 left-0 z-20 h-screen  w-80 bg-black px-6 pt-14">
              <div className="mb-16 w-full">
                <ul className="divide-y divide-white border-y border-white">
                  <li className="py-5 text-base text-white">
                    <ScrollLink
                      to="pickup"
                      smooth
                      duration={500}
                      className="cursor-pointer"
                      onClick={() => setIsClose(false)}
                    >
                      PICK UP{" "}
                    </ScrollLink>
                  </li>

                  <li className="py-5 text-base text-white">
                    <ScrollLink
                      to="feature"
                      smooth
                      duration={500}
                      className="cursor-pointer"
                      onClick={() => setIsClose(false)}
                    >
                      FEATURE
                    </ScrollLink>
                  </li>

                  <li className="py-5 text-base text-white">
                    <ScrollLink
                      to="contact"
                      smooth
                      duration={500}
                      className="cursor-pointer"
                      onClick={() => setIsClose(false)}
                    >
                      CONTACT
                    </ScrollLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mb-2.5 h-6 text-sm text-white">
                    <Link
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsClose(false)}
                    >
                      Twitter
                    </Link>
                  </li>

                  <li className="mb-2.5 h-6 text-sm text-white">
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsClose(false)}
                    >
                      facebook
                    </Link>
                  </li>

                  <li className="h-6 text-sm text-white">
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsClose(false)}
                    >
                      instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
      <header className="fixed top-0  h-20 w-full bg-white">
        <div className="mx-9 my-5 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Sneakers logo"
              width={175}
              height={40}
            />
          </Link>
          {!isClose && (
            <DensityMediumIcon
              className="size-8 cursor-pointer hover:opacity-50"
              onClick={() => setIsClose(true)}
            />
          )}
        </div>
      </header>
    </>
  );
};
