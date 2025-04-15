
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { UploadCloud, Package, BarChart3, DollarSign } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Placeholder stats
  const stats = [
    {
      title: "Total Sales",
      value: "$0.00",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Products",
      value: "0",
      icon: <Package className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Downloads",
      value: "0",
      icon: <DownloadIcon className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Conversion Rate",
      value: "0%",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your digital products and track sales.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    {stat.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You haven't made any sales yet. Upload a product to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <EmptyState 
                    title="No sales yet"
                    description="When you make sales, they'll appear here."
                    action={
                      <Button asChild>
                        <Link to="/dashboard/products">Manage Products</Link>
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
              
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Products</CardTitle>
                  <CardDescription>
                    Your recently added products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <EmptyState 
                    title="No products yet"
                    description="Add your first product to get started."
                    action={
                      <Button asChild>
                        <Link to="/dashboard/products/new">Add Product</Link>
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Detailed analytics for your products and sales.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <EmptyState 
                  title="No data to display"
                  description="Add products and make sales to see analytics."
                  icon={<BarChart3 className="h-10 w-10 text-muted-foreground" />}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Products</h2>
              <Button asChild>
                <Link to="/dashboard/products/new">
                  <UploadCloud className="mr-2 h-4 w-4" />
                  Add New Product
                </Link>
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6">
                <EmptyState 
                  title="No products yet"
                  description="Add your first digital product to start selling."
                  icon={<Package className="h-10 w-10 text-muted-foreground" />}
                  action={
                    <Button asChild>
                      <Link to="/dashboard/products/new">Add Product</Link>
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>
                  People who have purchased your products.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EmptyState 
                  title="No customers yet"
                  description="When you make sales, your customers will appear here."
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

// Helper components
const EmptyState = ({ 
  title, 
  description, 
  icon, 
  action 
}: { 
  title: string, 
  description: string, 
  icon?: React.ReactNode, 
  action?: React.ReactNode 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      {icon || <Package className="h-10 w-10 text-muted-foreground mb-3" />}
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
};

export default Dashboard;
