import { useRouter } from "next/router";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NavItem } from "@/components/models";

export const Navbar = ({ data }: { data: NavItem[] }) => {
  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <Menubar className="border-none gap-14 font-dreadful ">
      {data.map((item, index) => (
        <MenubarMenu key={index}>
          <div
            className="text-lg cursor-pointer"
            onClick={() => handleClick(item.href)}
          >
            <MenubarTrigger className="text-[27px]">
              {item.label}
            </MenubarTrigger>
          </div>
          {item.subMenu && item.subLabel && (
            <MenubarContent>
              {item.subLabel.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="text-lg cursor-pointer"
                  onClick={() => handleClick(item.href)}
                >
                  <MenubarItem key={subIndex} className="text-lg">
                    {subItem}
                  </MenubarItem>
                </div>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

{
  /*  <MenubarContent >
               <MenubarItem>
                 New Tab <MenubarShortcut>⌘T</MenubarShortcut>
               </MenubarItem>
               <MenubarItem>
                 New Window <MenubarShortcut></MenubarShortcut>
               </MenubarItem>
               <MenubarItem disabled>New Incognito Window</MenubarItem>
               <MenubarSeparator />
               <MenubarSub>
                 <MenubarSubTrigger>Share</MenubarSubTrigger>
                 <MenubarSubContent>
                   <MenubarItem>Email link</MenubarItem>
                   <MenubarItem>Messages</MenubarItem>
                   <MenubarItem>Notes</MenubarItem>
                 </MenubarSubContent>
               </MenubarSub>
               <MenubarSeparator />
               <MenubarItem>
                 Print... <MenubarShortcut>⌘P</MenubarShortcut>
               </MenubarItem> 
             </MenubarContent>*/
}
