import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Inter } from "next/font/google";
import MenuIcon from "@/components/icons/MenuIcon";
import LogOutIcon from "@/components/icons/LogOutIcon";
import MountainIcon from "@/components/icons/MountainIcon";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "@/components/common/Navbar";
import { NavItem } from "@/components/models";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const inter = Inter({ subsets: ["latin"] });

const NAV_ITEMS :NavItem[]= [
  { href: "#", label: "Home" },
  { href: "#", label: "Clases", sub_label: ['Classes', 'Programas', 'Servicios']  },
  { href: "#", label: "Eventos"},
  { href: "#", label: "Videos" },
  { href: "#", label: "Contacto" },
];

export default function Header(){
  const [navbarOpen, setNavbarOpen] = useState(true);
  return (
    <header className=" flex flex-col h-14 w-full fixed z-30 top-0">
      <div className="w-full lg:p-4  justify-end bg-header-primary hidden lg:flex drop-shadow-lg">
        <div className="flex items-center lg:gap-4">
          <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              height="32"
              width="32"
              data-type="color"
              role="presentation"
              aria-hidden="true"
            >
              <g>
                <path
                  fill="#2E77B5"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm5.433-22.414l-.59 3.848H21.74v9.303h-4.16v-9.302H14.2v-3.848h3.38v-2.933c0-3.336 1.988-5.18 5.028-5.18 1.457 0 2.98.26 2.98.26v3.276H23.91c-1.654 0-2.17 1.027-2.17 2.08v2.496h3.693z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </a>
          <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              height="32"
              width="32"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  fill="#2E77B5"
                  d="M18.191 17.073v6.066l5.546-3.033-5.546-3.033z"
                  data-color="1"
                ></path>
                <path
                  fill="#2E77B5"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm9.826-25.886c.323.306.558.695.678 1.125a23.54 23.54 0 0 1 .443 4.887 25.15 25.15 0 0 1-.444 4.868c-.116.424-.35.813-.677 1.125a2.698 2.698 0 0 1-1.186.658 68.034 68.034 0 0 1-8.33.416s-6.633 0-8.319-.438a2.74 2.74 0 0 1-1.188-.658 2.504 2.504 0 0 1-.686-1.124 25.722 25.722 0 0 1-.433-4.868 25.77 25.77 0 0 1 .433-4.867 2.56 2.56 0 0 1 .689-1.13 2.8 2.8 0 0 1 1.185-.674 67.88 67.88 0 0 1 8.32-.416s6.666 0 8.33.438a2.7 2.7 0 0 1 1.185.658z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </a>
          <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              height="32"
              width="32"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  fill="#2E77B5"
                  d="M20.84 23.01a3.251 3.251 0 0 1-3.354-.932 3.253 3.253 0 1 1 3.354.932z"
                  data-color="1"
                ></path>
                <path
                  fill="#2E77B5"
                  d="M19.895 11.905c2.602 0 2.91.01 3.938.057.95.043 1.466.202 1.81.336a3.02 3.02 0 0 1 1.12.728c.342.341.552.666.729 1.12.134.344.292.86.336 1.81.047 1.028.056 1.337.056 3.939 0 2.602-.01 2.91-.056 3.938-.044.95-.202 1.466-.336 1.81a3.024 3.024 0 0 1-.728 1.12 3.026 3.026 0 0 1-1.121.729c-.344.134-.86.292-1.81.336-1.028.047-1.335.056-3.938.056s-2.91-.01-3.938-.056c-.951-.044-1.467-.202-1.81-.336a3.024 3.024 0 0 1-1.121-.728 3.024 3.024 0 0 1-.728-1.121c-.134-.344-.293-.86-.336-1.81-.047-1.028-.057-1.336-.057-3.938 0-2.602.01-2.91.057-3.938.043-.951.202-1.467.336-1.81.156-.424.405-.807.728-1.121a3.026 3.026 0 0 1 1.12-.728c.344-.134.86-.293 1.81-.336 1.028-.047 1.337-.057 3.939-.057zm-1.917 3.362a5.007 5.007 0 0 0-3.093 4.628 5.009 5.009 0 1 0 3.093-4.628zm8.308-.02a1.185 1.185 0 1 1-2.169-.955 1.185 1.185 0 0 1 2.17.955z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  data-color="1"
                ></path>
                <path
                  fill="#2E77B5"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm-.105-29.85c-2.648 0-2.979.01-4.018.058-1.037.047-1.746.212-2.367.452a4.778 4.778 0 0 0-1.724 1.125 4.782 4.782 0 0 0-1.126 1.726c-.24.62-.405 1.328-.452 2.367-.047 1.038-.059 1.37-.059 4.017 0 2.646.01 2.977.059 4.018.047 1.037.212 1.746.452 2.366.245.65.629 1.24 1.125 1.726a4.784 4.784 0 0 0 1.726 1.123c.62.241 1.33.407 2.366.454 1.04.047 1.37.058 4.018.058 2.647 0 2.978-.01 4.018-.058 1.037-.048 1.746-.213 2.366-.454a4.78 4.78 0 0 0 1.726-1.123 4.782 4.782 0 0 0 1.123-1.727c.241-.62.407-1.329.454-2.365.047-1.04.058-1.371.058-4.018s-.01-2.978-.058-4.019c-.048-1.037-.213-1.745-.454-2.365a4.76 4.76 0 0 0-1.123-1.725 4.797 4.797 0 0 0-1.726-1.126c-.62-.24-1.329-.405-2.367-.452-1.039-.047-1.37-.059-4.017-.059z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </a>
          <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              height="32"
              width="32"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  fill="#2E77B5"
                  d="M20.714 17.791h-2.64v9.338h2.843v-4.524c0-1.515.558-2.48 1.9-2.48.968 0 1.349.895 1.349 2.48v4.524h2.84v-5.158c0-2.785-.664-4.302-3.472-4.302-1.464 0-2.44.686-2.82 1.448V17.79z"
                  data-color="1"
                ></path>
                <path
                  fill="#2E77B5"
                  d="M16.044 27.008h-2.842v-9.34h2.842v9.34z"
                  data-color="1"
                ></path>
                <path
                  fill="#2E77B5"
                  d="M16.323 15.335a1.83 1.83 0 0 0-1.7-2.5 1.828 1.828 0 1 0 1.7 2.5z"
                  data-color="1"  
                ></path>
                <path
                  fill="#2E77B5"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm-9.163-29.163c-.306.305-.477.72-.477 1.151v16.234a1.628 1.628 0 0 0 1.628 1.629h16.234a1.628 1.628 0 0 0 1.629-1.63V11.988a1.628 1.628 0 0 0-1.63-1.628H11.988c-.432 0-.846.171-1.151.477z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center z-30  w-full  border-b-[.5px] border-body-color/50 bg-white py-4 lg:py-6 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-white lg:p-0 `}
      >
        <div className="flex justify-end gap-4 lg:hidden p-2 md:p-6 z-10">
          <NavigationMenu />
        </div>
        <div className="ml-4 shadow-md absolute p-2 bg-white rounded-full block lg:flex lg:space-x-12">
          <Link href="/" className={`header-logo block w-full  `}>
            <Image
              src="/images/logo/logo-black.png"
              alt="logo"
              width={140}
              height={140}
              className="lg:w-20 w-16 dark:hidden"
            />
          </Link>
        </div>
        <div className="hidden absolute bg-white  h-[72px] lg:flex items-center  right-10">
          <Navbar data={NAV_ITEMS}/>
        </div>
        <div className="flex flex-col gap-2 mt-[-2.5rem] lg:mt-0">
          <div className=" h-2 w-full bg-red-600"></div>
          <div className=" h-2 w-full bg-red-600"></div>
        </div>
      </div>
    </header>
  );
};

const NavigationMenu = () => (
  <>
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-white">
          <Button variant="nav" size="default" className="rounded-full border-none">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <MenuItems />
      </SheetContent>
    </Sheet>
    <div className="items-center gap-2 hidden lg:flex">
      <MenuItems />
    </div>
  </>
);

const MenuItems = () => (
  <div className="w-full">
    {NAV_ITEMS.map((item) => (
      <div key={item.label} className="relative group w-full">
        {item.sub_label ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={item.label} className="border-none">
              <AccordionTrigger className="flex items-center py-2 text-lg font-semibold w-full hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                {item.sub_label.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={`${item.href}/${subItem.toLowerCase()}`}
                    className="block py-2 text-lg text-gray-700 hover:bg-gray-100"
                  >
                    {subItem}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            href={item.href}
            className="flex items-center py-2 text-lg font-semibold w-full"
            prefetch={false}
          >
            {item.label}
          </Link>
        )}
      </div>
    ))}
  </div>
);