import { useState, type PropsWithChildren } from "react";
import { SidebarContext } from "./SidebarContext";

type Props = PropsWithChildren;

function SidebarProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  
  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
