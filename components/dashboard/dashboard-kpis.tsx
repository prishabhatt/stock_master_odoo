import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, AlertTriangle, ArrowDownToLine, ArrowUpFromLine, ArrowLeftRight, XCircle } from "lucide-react"

const kpis = [
  {
    title: "Total Products",
    value: "2,345",
    description: "+180 from last month",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Low Stock Items",
    value: "12",
    description: "Reorder required",
    icon: AlertTriangle,
    color: "text-amber-600",
  },
  {
    title: "Pending Receipts",
    value: "5",
    description: "Incoming this week",
    icon: ArrowDownToLine,
    color: "text-emerald-600",
  },
  {
    title: "Pending Deliveries",
    value: "8",
    description: "To be packed",
    icon: ArrowUpFromLine,
    color: "text-indigo-600",
  },
  {
    title: "Internal Transfers",
    value: "3",
    description: "Scheduled today",
    icon: ArrowLeftRight,
    color: "text-violet-600",
  },
  {
    title: "Out of Stock",
    value: "4",
    description: "Restock immediately",
    icon: XCircle,
    color: "text-rose-600",
  },
]

export function DashboardKPIs() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {kpis.map((kpi) => (
        <Card key={kpi.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <p className="text-xs text-muted-foreground">{kpi.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
