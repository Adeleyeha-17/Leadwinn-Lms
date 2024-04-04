import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
   return ( 
      <div className="h-full border-r flex flex-col inset-y-0">
         <div className="p-4">
            <Logo /> 
         </div>

         <div className="flex flex-col w-full">
            <SidebarRoutes />
         </div>
      </div>
    );
}
 
export default Sidebar;