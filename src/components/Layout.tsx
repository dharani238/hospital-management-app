import { useAuth } from "@/contexts/AuthContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { LogOut, Activity } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { signOut, user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card flex items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <Activity className="h-6 w-6 text-primary" />
              <h1 className="text-lg font-semibold text-foreground">Hospital Management System</h1>
            </div>
            {user && (
              <Button onClick={signOut} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            )}
          </header>
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
