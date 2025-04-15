
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";
import { Upload, Image, File } from "lucide-react";

const NewProduct = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null as File | null,
    file: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "file") => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [type]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.title || !formData.price || !formData.file) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Here we'd normally upload files and save the product
    // But for demo purposes, we'll just show a toast and navigate
    
    setTimeout(() => {
      toast({
        title: "Product created!",
        description: "To implement actual file uploads, connect Supabase integration.",
      });
      setIsSubmitting(false);
      navigate("/dashboard/products");
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
          <p className="text-muted-foreground">
            Create a new digital product to sell on DigitalShelf.
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Fill in the information about your digital product.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Product Title*</Label>
                <Input 
                  id="title" 
                  name="title" 
                  placeholder="e.g. Ultimate UI Kit" 
                  required 
                  onChange={handleInputChange}
                  value={formData.title}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  placeholder="Describe your product..." 
                  rows={4}
                  onChange={handleInputChange}
                  value={formData.description}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)*</Label>
                <Input 
                  id="price" 
                  name="price" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  placeholder="19.99"
                  required 
                  onChange={handleInputChange}
                  value={formData.price}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Cover Image</Label>
                <div className="border border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  {formData.image ? (
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm">{formData.image.name}</span>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => setFormData(prev => ({ ...prev, image: null }))}
                        >
                          Change
                        </Button>
                      </div>
                      <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                        <img 
                          src={URL.createObjectURL(formData.image)} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium mb-1">Drag & drop or click to upload</p>
                      <p className="text-xs text-muted-foreground mb-4">PNG, JPG up to 5MB</p>
                      <Button type="button" variant="outline" size="sm" asChild>
                        <label htmlFor="image-upload" className="cursor-pointer">
                          Select Image
                          <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={(e) => handleFileChange(e, "image")}
                          />
                        </label>
                      </Button>
                    </>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="file">Digital Product File*</Label>
                <div className="border border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  {formData.file ? (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-3">
                        <File className="h-8 w-8 text-brand-purple" />
                        <div>
                          <p className="font-medium">{formData.file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(formData.file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => setFormData(prev => ({ ...prev, file: null }))}
                      >
                        Change
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium mb-1">Drag & drop or click to upload</p>
                      <p className="text-xs text-muted-foreground mb-4">PDF, ZIP, etc. up to 500MB</p>
                      <Button type="button" variant="outline" size="sm" asChild>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          Select File
                          <input
                            id="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => handleFileChange(e, "file")}
                            required
                          />
                        </label>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-brand-purple hover:bg-brand-purple-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Product..." : "Create Product"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NewProduct;
