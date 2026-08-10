import { createContext } from "react";




type ContextValue = {
  isOpen : boolean;
  toggleSidebar : ()=>void
}


export const SidebarContext = createContext<ContextValue>({} as ContextValue )