"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentOperations = [
  {
    id: "WH-OUT-001",
    type: "Delivery",
    date: "2023-11-22",
    destination: "Customer A",
    status: "Done",
    items: "Steel Rods (20)",
  },
  {
    id: "WH-IN-003",
    type: "Receipt",
    date: "2023-11-22",
    destination: "Main Warehouse",
    status: "Ready",
    items: "Aluminum Sheets (50)",
  },
  {
    id: "WH-INT-005",
    type: "Transfer",
    date: "2023-11-21",
    destination: "Production Floor",
    status: "Draft",
    items: "Copper Wire (100m)",
  },
  {
    id: "WH-ADJ-002",
    type: "Adjustment",
    date: "2023-11-21",
    destination: "Main Store",
    status: "Done",
    items: "Scrap Metal (-5kg)",
  },
  {
    id: "WH-OUT-002",
    type: "Delivery",
    date: "2023-11-20",
    destination: "Customer B",
    status: "Canceled",
    items: "Steel Plates (10)",
  },
]

export function OperationsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Operations</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Reference</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Destination / Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Items</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOperations.map((op) => (
              <TableRow key={op.id}>
                <TableCell className="font-medium">{op.id}</TableCell>
                <TableCell>{op.type}</TableCell>
                <TableCell>{op.date}</TableCell>
                <TableCell>{op.destination}</TableCell>
                <TableCell>
                  <StatusBadge status={op.status} />
                </TableCell>
                <TableCell className="text-right">{op.items}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }: { status: string }) {
  const variant = "secondary"
  let className = "text-slate-600 bg-slate-100"

  switch (status) {
    case "Draft":
      className = "text-amber-700 bg-amber-100 hover:bg-amber-100"
      break
    case "Ready":
      className = "text-blue-700 bg-blue-100 hover:bg-blue-100"
      break
    case "Done":
      className = "text-emerald-700 bg-emerald-100 hover:bg-emerald-100"
      break
    case "Canceled":
      className = "text-rose-700 bg-rose-100 hover:bg-rose-100"
      break
  }

  return (
    <Badge variant="outline" className={`border-0 font-medium ${className}`}>
      {status}
    </Badge>
  )
}
