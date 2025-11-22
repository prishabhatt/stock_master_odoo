import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const receipts = [
  {
    id: "RCP-001",
    vendor: "Steel Suppliers Inc.",
    items: "Steel Rods (50kg)",
    date: "2025-11-20",
    warehouse: "Main Warehouse",
    status: "done",
  },
  {
    id: "RCP-002",
    vendor: "Global Plastics",
    items: "Plastic Pellets (100kg)",
    date: "2025-11-23",
    warehouse: "Main Warehouse",
    status: "draft",
  },
  {
    id: "RCP-003",
    vendor: "Office Depot",
    items: "Packing Tape (50 rolls)",
    date: "2025-11-24",
    warehouse: "Warehouse 2",
    status: "waiting",
  },
]

const statusConfig: Record<string, { label: string; className: string }> = {
  draft: {
    label: "Draft",
    className: "bg-[var(--status-draft-bg)] text-[var(--status-draft-text)] hover:bg-[var(--status-draft-bg)]",
  },
  waiting: {
    label: "Waiting",
    className: "bg-[var(--status-draft-bg)] text-[var(--status-draft-text)] hover:bg-[var(--status-draft-bg)]",
  },
  done: {
    label: "Done",
    className: "bg-[var(--status-done-bg)] text-[var(--status-done-text)] hover:bg-[var(--status-done-bg)]",
  },
}

export function ReceiptsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Incoming Receipts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Receipt ID</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Items Summary</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receipts.map((receipt) => (
              <TableRow key={receipt.id}>
                <TableCell className="font-mono font-medium">{receipt.id}</TableCell>
                <TableCell>{receipt.vendor}</TableCell>
                <TableCell>{receipt.items}</TableCell>
                <TableCell>{receipt.date}</TableCell>
                <TableCell>{receipt.warehouse}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={statusConfig[receipt.status].className}>
                    {statusConfig[receipt.status].label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
