"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function DashboardActionCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Receipts Card */}
      <Card className="bg-slate-950 text-white border-slate-400">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-slate-400">Receipts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild size="lg" className="w-full justify-between text-lg h-16 bg-gray-600 hover:bg-gray-700">
            <Link href="/receipts?status=waiting">
              <span>4 to receive</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <div className="flex gap-4 text-sm">
            <Badge variant="outline" className="border-rose-500 text-rose-500 bg-rose-950/30">
              1 Late
            </Badge>
            <span className="text-slate-400">6 operations</span>
          </div>
        </CardContent>
      </Card>

      {/* Deliveries Card */}
      <Card className="bg-slate-950 text-white border-grey">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-slate-400">Delivery Orders</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild size="lg" className="w-full justify-between text-lg h-16 bg-gray-600 hover:bg-gray-700">
            <Link href="/deliveries?status=waiting">
              <span>4 to Deliver</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <div className="flex gap-4 text-sm items-center">
            <Badge variant="outline" className="border-rose-500 text-rose-500 bg-rose-950/30">
              1 Late
            </Badge>
            <Badge variant="outline" className="border-amber-500 text-amber-500 bg-amber-950/30">
              2 Waiting
            </Badge>
            <span className="text-slate-400">6 operations</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
