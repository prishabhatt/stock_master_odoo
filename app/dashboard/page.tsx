"use client"

import { Shell } from "@/components/layout/shell"
import { DashboardKPIs } from "@/components/dashboard/dashboard-kpis"
import { OperationsTable } from "@/components/dashboard/operations-table"
import { DashboardFilters } from "@/components/dashboard/dashboard-filters"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { DashboardActionCards } from "@/components/dashboard/action-cards"

export default function DashboardPage() {
  return (
    <Shell
      title="Overview"
      actions={
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      }
    >
      <div className="flex flex-col gap-6">
        {/* Added the new Action Cards prominently at the top */}
        <DashboardActionCards />

        {/* Kept the original KPIs but maybe they are secondary now. 
            The user requested "DASHBOARD SHOULD BE LIKE THIS" (referring to the diagram).
            The diagram mainly showed the action cards. I'll keep the KPIs for extra value 
            but the Action Cards are the focus. */}
        <DashboardKPIs />

        <div className="grid gap-6 lg:grid-cols-1">
          <div className="space-y-4">
            <DashboardFilters />
            <OperationsTable />
          </div>
        </div>
      </div>
    </Shell>
  )
}
