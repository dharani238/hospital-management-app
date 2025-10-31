import { Home, Users, UserCog, Calendar, LayoutDashboard } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, protected: true },
  { title: "Patients", url: "/patients", icon: Users, protected: true },
  { title: "Doctors", url: "/doctors", icon: UserCog, protected: true },
  { title: "Appointments", url: "/appointments", icon: Calendar, protected: true },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { userRole } = useAuth();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => location.pathname === path;
  const getNavCls = (active: boolean) =>
    active ? "bg-primary text-primary-foreground" : "hover:bg-muted";

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                // Show all items if user has a role, or only non-protected items
                if (item.protected && !userRole) return null;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={getNavCls(isActive(item.url))}
                      >
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
