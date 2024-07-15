import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NavItem } from "@/components/models";

export const Navbar = ({ data }: { data: NavItem[] }) => {
  return (
    <Menubar className="border-none gap-8 text-2xl">
      {data.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="text-2xl">{item.label}</MenubarTrigger>
          {item.sub_label && (
            <MenubarContent>
              {item.sub_label.map((subItem, subIndex) => (
                <MenubarItem key={subIndex} className="text-lg">
                  {subItem}
                </MenubarItem>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};


     {/*  <MenubarContent >
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
             </MenubarContent>*/}