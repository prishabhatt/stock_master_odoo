"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"

// Mock data for available products
const AVAILABLE_PRODUCTS = [
  { id: "DESK001", name: "[DESK001] Desk" },
  { id: "CHAIR001", name: "[CHAIR001] Office Chair" },
  { id: "LAMP001", name: "[LAMP001] LED Lamp" },
  { id: "CAB001", name: "[CAB001] Filing Cabinet" },
]

interface DeliveryItem {
  id: string
  productId: string
  productName: string
  quantity: number
}

export default function DeliveriesPage() {
  // State for line items
  const [items, setItems] = useState<DeliveryItem[]>([
    { id: "1", productId: "DESK001", productName: "[DESK001] Desk", quantity: 6 },
  ])

  // State for the new item being added
  const [isAdding, setIsAdding] = useState(false)
  const [newItem, setNewItem] = useState<{ productId: string; quantity: string }>({
    productId: "",
    quantity: "1",
  })

  const handleAddItem = () => {
    if (!newItem.productId || !newItem.quantity) return

    const product = AVAILABLE_PRODUCTS.find((p) => p.id === newItem.productId)
    if (!product) return

    const newItemEntry: DeliveryItem = {
      id: Math.random().toString(36).substring(7),
      productId: newItem.productId,
      productName: product.name,
      quantity: Number.parseInt(newItem.quantity),
    }

    setItems([...items, newItemEntry])
    setIsAdding(false)
    setNewItem({ productId: "", quantity: "1" })
  }

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-xl font-semibold text-foreground">Delivery Orders</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
          <Card className="border-2 border-primary/20">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                    <CardTitle className="text-2xl">Delivery</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">Modern Oyster</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
                  >
                    Draft
                  </Badge>
                  <span className="text-muted-foreground">→</span>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                  >
                    Waiting
                  </Badge>
                  <span className="text-muted-foreground">→</span>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                  >
                    Ready
                  </Badge>
                  <span className="text-muted-foreground">→</span>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                  >
                    Done
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              {/* Reference Number */}
              <div className="space-y-4 rounded-lg border border-border p-4">
                <h3 className="font-mono text-lg font-semibold">WH/OUT/00001</h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="delivery-address">Delivery Address</Label>
                    <Input id="delivery-address" placeholder="Enter delivery address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scheduled-date">Scheduled Date</Label>
                    <Input id="scheduled-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="responsible">Responsible</Label>
                    <Input id="responsible" placeholder="Assign responsible person" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="operation-type">Operation Type</Label>
                    <Select>
                      <SelectTrigger id="operation-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Delivery</SelectItem>
                        <SelectItem value="express">Express Delivery</SelectItem>
                        <SelectItem value="bulk">Bulk Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Products</h3>
                <div className="rounded-lg border border-border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-right">Quantity</TableHead>
                        <TableHead className="w-[100px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.productName}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}

                      {/* Add Item Row */}
                      {isAdding ? (
                        <TableRow className="bg-muted/50">
                          <TableCell>
                            <Select
                              value={newItem.productId}
                              onValueChange={(val) => setNewItem({ ...newItem, productId: val })}
                            >
                              <SelectTrigger className="h-8 w-full min-w-[200px]">
                                <SelectValue placeholder="Select product..." />
                              </SelectTrigger>
                              <SelectContent>
                                {AVAILABLE_PRODUCTS.map((p) => (
                                  <SelectItem key={p.id} value={p.id}>
                                    {p.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="text-right">
                            <Input
                              type="number"
                              min="1"
                              className="ml-auto h-8 w-20 text-right"
                              value={newItem.quantity}
                              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-green-600 hover:bg-green-100 hover:text-green-700 dark:hover:bg-green-900"
                                onClick={handleAddItem}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-red-600 hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-900"
                                onClick={() => setIsAdding(false)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center">
                            <Button
                              variant="outline"
                              className="w-full bg-transparent border-dashed text-muted-foreground hover:text-foreground"
                              size="sm"
                              onClick={() => setIsAdding(true)}
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Add New Product
                            </Button>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button variant="outline">Save as Draft</Button>
                <Button>Validate & Mark Ready</Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="border-muted-foreground/20 bg-muted/30">
            <CardContent className="p-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-semibold">Draft: Initial stage</p>
                <p>→ Waiting: Marks the out of stock product to be waiting to be received</p>
                <p>→ Done: Received or delivered</p>
                <p className="mt-4 text-xs italic">Also: Validation & mark the line red if product is out of stock</p>
                <p className="text-xs italic">Vibrant Marten: Use validation feature</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </>
  )
}
