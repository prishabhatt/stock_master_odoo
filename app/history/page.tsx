"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, LayoutList, LayoutGrid, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const MOVES = [
  {
    id: 1,
    reference: "WH/IN/0001",
    date: "12/1/2001",
    contact: "Azure Interior",
    from: "Vendor",
    to: "WH/Stock1",
    quantity: 50,
    status: "Ready",
    type: "in",
  },
  {
    id: 2,
    reference: "WH/OUT/002",
    date: "12/1/2001",
    contact: "Azure Interior",
    from: "WH/Stock1",
    to: "Vendor",
    quantity: 10,
    status: "Ready",
    type: "out",
  },
  {
    id: 3,
    reference: "WH/OUT/Chirag",
    date: "12/1/2001",
    contact: "Azure Interior",
    from: "WH/Stock2",
    to: "Vendor",
    quantity: 5,
    status: "Ready",
    type: "out",
  },
]

export default function HistoryPage() {
  const [view, setView] = React.useState<"list" | "kanban">("list")

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-xl font-semibold text-foreground">Move History</h1>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button
              variant="outline"
              className="w-fit gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Plus className="h-4 w-4" />
              NEW
            </Button>

            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8" />
              </div>
              <div className="flex items-center gap-1 rounded-md border bg-background p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("h-7 w-7", view === "list" && "bg-accent text-accent-foreground")}
                  onClick={() => setView("list")}
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("h-7 w-7", view === "kanban" && "bg-accent text-accent-foreground")}
                  onClick={() => setView("kanban")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Card>
            {/* Removed CardHeader title as it's redundant with the page title or toolbar */}
            <CardContent className="p-0">
              {view === "list" ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reference</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOVES.map((move) => (
                      <TableRow key={move.id}>
                        <TableCell
                          className={cn("font-medium", move.type === "in" ? "text-emerald-600" : "text-rose-600")}
                        >
                          {move.reference}
                        </TableCell>
                        <TableCell>{move.date}</TableCell>
                        <TableCell>{move.contact}</TableCell>
                        <TableCell>{move.from}</TableCell>
                        <TableCell>{move.to}</TableCell>
                        <TableCell className="text-right font-mono">{move.quantity}</TableCell>
                        <TableCell>
                          <Badge variant={move.status === "Ready" ? "default" : "secondary"}>{move.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex h-64 items-center justify-center text-muted-foreground">
                  Kanban view would display cards grouped by status here.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </>
  )
}
