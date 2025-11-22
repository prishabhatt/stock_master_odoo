"use client"

import { useState } from "react"
import { Shell } from "@/components/layout/shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function LocationsPage() {
  const [locations, setLocations] = useState([
    { id: 1, name: "Main Warehouse", code: "WH-001", type: "Warehouse", parent: "-" },
    { id: 2, name: "Production Floor", code: "PF-01", type: "Production", parent: "Main Warehouse" },
    { id: 3, name: "Rack A", code: "WH-RA", type: "Rack", parent: "Main Warehouse" },
    { id: 4, name: "Rack B", code: "WH-RB", type: "Rack", parent: "Main Warehouse" },
    { id: 5, name: "Cold Storage", code: "CS-01", type: "Warehouse", parent: "-" },
  ])

  return (
    <Shell>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Locations</h1>
            <p className="text-muted-foreground">Manage warehouses, zones, and storage locations.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Create Location Form - Matching the requested design */}
          <Card className="md:col-span-1 border-primary/20 shadow-md">
            <CardHeader className="bg-muted/30 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <CardTitle>New Location</CardTitle>
              </div>
              <CardDescription>Define a new storage area.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 pt-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Location Name</Label>
                <Input id="name" placeholder="e.g., Zone A, Shelf 1" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="code">Short Code</Label>
                <Input id="code" placeholder="e.g., Z-A-S1" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="warehouse">Parent Warehouse</Label>
                <Select defaultValue="wh-001">
                  <SelectTrigger id="warehouse">
                    <SelectValue placeholder="Select warehouse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wh-001">Main Warehouse</SelectItem>
                    <SelectItem value="wh-002">Cold Storage</SelectItem>
                    <SelectItem value="pf-01">Production Floor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md bg-muted/50 p-3 text-sm text-muted-foreground border border-border/50 mt-2">
                <p>This holds the multiple locations of warehouse, rooms etc..</p>
              </div>

              <Button className="w-full mt-2">Create Location</Button>
            </CardContent>
          </Card>

          {/* Location Visual/List Area */}
          <Card className="md:col-span-2 h-full min-h-[400px] flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Location Hierarchy</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search locations..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-4 bg-muted/50 p-3 text-sm font-medium border-b">
                  <div className="col-span-4">Name</div>
                  <div className="col-span-3">Code</div>
                  <div className="col-span-3">Type</div>
                  <div className="col-span-2">Parent</div>
                </div>
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="grid grid-cols-12 gap-4 p-3 text-sm border-b last:border-0 hover:bg-muted/20 transition-colors items-center"
                  >
                    <div className="col-span-4 font-medium flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary/70" />
                      {location.name}
                    </div>
                    <div className="col-span-3 text-muted-foreground">{location.code}</div>
                    <div className="col-span-3">
                      <Badge
                        variant="outline"
                        className="bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                      >
                        {location.type}
                      </Badge>
                    </div>
                    <div className="col-span-2 text-muted-foreground text-xs truncate" title={location.parent}>
                      {location.parent}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Nodes Representation (Abstract) */}
              <div className="mt-8 relative h-40 bg-slate-950 rounded-lg overflow-hidden border border-slate-800 p-4 hidden md:block">
                <div className="absolute top-4 left-4 flex gap-4">
                  <div className="bg-emerald-900/50 border border-emerald-700/50 text-emerald-400 px-3 py-1.5 rounded-md text-xs font-mono">
                    Main Warehouse
                  </div>
                  <div className="w-8 h-px bg-slate-700 self-center"></div>
                  <div className="bg-blue-900/50 border border-blue-700/50 text-blue-400 px-3 py-1.5 rounded-md text-xs font-mono">
                    Rack A
                  </div>
                </div>
                <div className="absolute top-16 left-4 flex gap-4">
                  <div className="w-[108px] h-12 border-l border-slate-700 absolute -top-8 left-[54px] border-b rounded-bl-lg"></div>
                  <div className="ml-[140px] bg-purple-900/50 border border-purple-700/50 text-purple-400 px-3 py-1.5 rounded-md text-xs font-mono">
                    Rack B
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] text-slate-600">Visual Map Preview</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Shell>
  )
}
