import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ReceiptsList } from "@/components/operations/receipts-list"
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
import { ReceiptForm } from "@/components/operations/receipt-form"

export default function ReceiptsPage() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-xl font-semibold text-foreground">Receipts (Incoming)</h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Receipt
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create Receipt</DialogTitle>
                <DialogDescription>Record incoming stock from vendors.</DialogDescription>
              </DialogHeader>
              <ReceiptForm />
            </DialogContent>
          </Dialog>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
          <ReceiptsList />
        </div>
      </SidebarInset>
    </>
  )
}
