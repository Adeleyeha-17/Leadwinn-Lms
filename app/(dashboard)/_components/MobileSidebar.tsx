import { Menu } from "lucide-react";
import {
   Sheet,
   SheetContent,
   SheetTrigger
} from "@/components/ui/sheet"
import Sidebar from "./sidebar";

const MobileSidebar = () => {
   return ( 
      <Sheet>
         <SheetTrigger className="md:hidden pl-4 hover:opacity-75 transition">
            <Menu />
         </SheetTrigger>

         <SheetContent side="left" className="px-0">
            <Sidebar />
         </SheetContent>
      </Sheet>
   );
}
 
export default MobileSidebar;