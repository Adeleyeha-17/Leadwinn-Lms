import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
   return ( 
      <div className="border-b h-full flex items-center px-4 bg-white shadow-sm">
         <MobileSidebar />
         
         <NavbarRoutes />
      </div>
    );
}
 
export default Navbar;