import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Inter } from "next/font/google";
import MenuIcon from "@/components/icons/MenuIcon";
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

export default function Header2(){
  const [navbarOpen, setNavbarOpen] = useState(true);
  return (
    <header className=" flex flex-col h-14 w-full fixed z-30 top-0">
      <div
        className={`flex flex-col justify-center z-30  w-full  border-b-[.5px] border-body-color/50 bg-white  lg:py-6 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-white lg:p-0 `}
      >
        <div className="flex justify-end gap-4 lg:hidden px-5  py-4 md:p-6 z-10 h-[72px]">
          <NavigationMenu />
        </div>
        <div className="ml-4 absolute p-2 block lg:flex lg:space-x-12">
          <Link href="/" className="header-logo block w-full">
            <Image
              src="/images/logo/logo-black.png"
              alt="logo"
              width={140}
              height={140}
              className="w-48 dark:hidden"
            />
          </Link>
        </div>
        <div className="hidden absolute bg-white  h-[72px] lg:flex items-center  right-10">
          <Navbar data={NAV_ITEMS}/>
        </div>
      </div>
    </header>
  );
};

const NavigationMenu = () => (
  <>
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-navBurger rounded">
          <Button variant="nav" size="default" className="rounded-full border-none py-0 px-2 w-[42.5px] h-[42.5px]">
            <MenuIcon className="h-5 w-5" />
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
              <AccordionTrigger className="flex items-center py-2 text-[1rem] font-semibold w-full hover:no-underline">
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