"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ProductList } from "@/components/products/product-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProductForm } from "@/components/products/product-form"

const initialProducts = [
  {
    id: "PRD-001",
    name: "Steel Rods",
    sku: "SR-2025",
    category: "Raw Materials",
    uom: "kg",
    stock: 147,
    minStock: 50,
    status: "In Stock",
  },
  {
    id: "PRD-002",
    name: "Office Chairs",
    sku: "OC-BLK-01",
    category: "Finished Goods",
    uom: "pcs",
    stock: 32,
    minStock: 20,
    status: "In Stock",
  },
  {
    id: "PRD-003",
    name: "Plastic Pellets",
    sku: "PP-WHT",
    category: "Raw Materials",
    uom: "kg",
    stock: 450,
    minStock: 100,
    status: "In Stock",
  },
  {
    id: "PRD-004",
    name: "Packing Tape",
    sku: "PKT-CLR",
    category: "Consumables",
    uom: "roll",
    stock: 5,
    minStock: 15,
    status: "Low Stock",
  },
  {
    id: "PRD-005",
    name: "Cardboard Boxes",
    sku: "BX-LGE",
    category: "Consumables",
    uom: "pcs",
    stock: 0,
    minStock: 50,
    status: "Out of Stock",
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [open, setOpen] = useState(false)

  const handleAddProduct = (data: any) => {
    const newProduct = {
      id: `PRD-${Math.floor(Math.random() * 1000)}`,
      name: data.name,
      sku: data.sku,
      category: data.category,
      uom: data.uom,
      stock: 0,
      minStock: data.minStock,
      status: "Out of Stock",
    }
    setProducts([...products, newProduct])
    setOpen(false)
  }

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-xl font-semibold text-foreground">Products</h1>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Product</DialogTitle>
                <DialogDescription>Add a new product to your inventory catalog.</DialogDescription>
              </DialogHeader>
              <ProductForm onSuccess={handleAddProduct} />
            </DialogContent>
          </Dialog>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
          <ProductList products={products} />
        </div>
      </SidebarInset>
    </>
  )
}
