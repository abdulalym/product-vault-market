
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  BarChart3, 
  Settings, 
  Users, 
  ShoppingCart, 
  LogOut, 
  Menu,
  X
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Close sidebar when route changes (on mobile)
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);
  
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      name: "Products",
      href: "/dashboard/products",
      icon: <Package className="w-5 h-5" />,
    },
    {
      name: "Orders",
      href: "/dashboard/orders",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      name: "Customers",
      href: "/dashboard/customers",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      name: "Files",
      href: "/dashboard/files",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/dashboard" && location.pathname === "/dashboard") {
      return true;
    }
    return location.pathname.startsWith(path) && path !== "/dashboard";
  };

  const SidebarContent = () => (
    <>
      <div className="flex items-center h-16 px-6 border-b">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-purple rounded-md w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold">DS</span>
          </div>
          <span className="text-xl font-bold">DigitalShelf</span>
        </Link>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive(item.href)
                  ? "bg-brand-purple text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Link>
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar for desktop */}
      {!isMobile && (
        <aside className="w-64 border-r bg-sidebar">
          <SidebarContent />
        </aside>
      )}
      
      {/* Mobile sidebar (off-canvas) */}
      {isMobile && isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <aside className="fixed inset-y-0 left-0 w-64 z-50 bg-sidebar border-r">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 p-1"
            >
              <X className="h-6 w-6" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        {/* Mobile header */}
        {isMobile && (
          <header className="border-b h-16 flex items-center px-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-1"
              aria-label="Open sidebar"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 flex items-center gap-2">
              <div className="bg-brand-purple rounded-md w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold">DS</span>
              </div>
              <span className="text-lg font-bold">DigitalShelf</span>
            </div>
          </header>
        )}
        
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
