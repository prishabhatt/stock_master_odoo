"use client"

import { useState } from "react"
import { Plus, Search, Building, MapPin, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

// Mock data for warehouses
const initialWarehouses = [
  {
    id: 1,
    name: "Main Distribution Center",
    code: "MDC-01",
    address: "123 Logistics Blvd, Industrial Park, NY 10001",
    locations: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "West Coast Hub",
    code: "WCH-02",
    address: "456 Harbor Drive, Los Angeles, CA 90012",
    locations: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "East Coast Annex",
    code: "ECA-03",
    address: "789 Dockside Rd, Boston, MA 02110",
    locations: 5,
    status: "Maintenance",
  },
]

export default function WarehousesPage() {
  const [warehouses, setWarehouses] = useState(initialWarehouses)
  const [searchTerm, setSearchTerm] = useState("")

  const [newName, setNewName] = useState("")
  const [newCode, setNewCode] = useState("")
  const [newAddress, setNewAddress] = useState("")

  const filteredWarehouses = warehouses.filter(
    (wh) =>
      wh.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wh.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleCreateWarehouse = () => {
    if (!newName || !newCode) return

    const newWarehouse = {
      id: warehouses.length + 1,
      name: newName,
      code: newCode,
      address: newAddress,
      locations: 0,
      status: "Active",
    }

    setWarehouses([...warehouses, newWarehouse])

    // Reset form
    setNewName("")
    setNewCode("")
    setNewAddress("")
  }

  const handleDeleteWarehouse = (id: number) => {
    setWarehouses(warehouses.filter((wh) => wh.id !== id))
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Warehouses</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage your physical storage facilities and centers.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Warehouse List */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card>
            <CardHeader className="px-6 py-4 border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle>All Warehouses</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
                  <Input
                    placeholder="Search warehouses..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Locations</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWarehouses.map((wh) => (
                    <TableRow key={wh.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                            <Building className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span>{wh.name}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono">
                          {wh.code}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate" title={wh.address}>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MapPin className="h-3 w-3" />
                          {wh.address}
                        </div>
                      </TableCell>
                      <TableCell>{wh.locations} Zones</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={
                            wh.status === "Active"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                          }
                        >
                          {wh.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-rose-600 focus:text-rose-600 cursor-pointer"
                              onClick={() => handleDeleteWarehouse(wh.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Warehouse
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Add Warehouse Form */}
        <div className="flex flex-col gap-6">
          <Card className="border-primary/20 shadow-md">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-border">
              <CardTitle className="text-lg">Add New Warehouse</CardTitle>
              <CardDescription>Create a new storage facility record.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wh-name">Warehouse Name</Label>
                <Input
                  id="wh-name"
                  placeholder="e.g., Central Hub"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wh-code">Short Code</Label>
                <Input
                  id="wh-code"
                  placeholder="e.g., CH-01"
                  className="font-mono"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wh-address">Address</Label>
                <Textarea
                  id="wh-address"
                  placeholder="Enter full physical address..."
                  className="resize-none min-h-[100px]"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                />
              </div>

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
                onClick={handleCreateWarehouse}
                disabled={!newName || !newCode}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Warehouse
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-500">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Warehouses</span>
                <span className="text-2xl font-bold">3</span>
              </div>
              <div className="h-[1px] bg-border" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Capacity Usage</span>
                <span className="text-2xl font-bold text-blue-600">78%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
