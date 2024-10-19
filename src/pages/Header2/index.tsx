import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Inter } from "next/font/google";
import MenuIcon from "@/components/icons/MenuIcon";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "@/components/common/Navbar";
import { NavItem } from "@/components/models";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SocialIcons from "@/components/common/SocialIcons";

const inter = Inter({ subsets: ["latin"] });

const NAV_ITEMS: NavItem[] = [
  { href: "#", label: "Inicio" },
  { href: "#us", label: "Nosotros" },

  {
    href: "#pricing",
    label: "Clases",
    subMenu: false,
    subLabel: ["Classes", "Programas", "Servicios"],
  },
  { href: "#events", label: "Eventos" },
  { href: "#products", label: "Productos" },
  // { href: "#", label: "Activaciones" },
];

export default function Header2() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between h-[72px] lg:h-24">
          <Link href="/" className="header-logo flex items-center">
            <Image
              src="/images/logo/logo-black.png"
              alt="logo"
              width={140}
              height={140}
              className="w-48"
            />
          </Link>

          <nav className="hidden lg:block">
            <Navbar data={NAV_ITEMS} />
          </nav>

          <div className="flex items-center">
            <div className="hidden lg:block">
              <SocialIcons />
            </div>
            <div className="lg:hidden ml-4">
              <NavigationMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const NavigationMenu = () => (
  <>
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-navBurger rounded">
          <Button
            variant="nav"
            size="default"
            className="rounded-full border-none py-0 px-2 w-[42.5px] h-[42.5px]"
          >
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
        {item.subLabel ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={item.label} className="border-none">
              <AccordionTrigger className="font-dreadful flex items-center py-2 text-[1rem] font-semibold w-full hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="pl-4 font-dreadful ">
                {item.subLabel.map((subItem, subIndex) => (
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
            className="font-dreadful flex items-center py-2 text-lg font-semibold w-full"
            prefetch={false}
          >
            {item.label}
          </Link>
        )}
      </div>
    ))}
  </div>
);
