import Link from "next/link"
import Image from "next/image"
import { Package, ArrowRight, BarChart3, Boxes, ShieldCheck, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b px-6 lg:px-10">
        <div className="flex items-center gap-2 font-bold text-primary">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Package className="h-5 w-5" />
          </div>
          <span className="text-lg">StockMaster</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 md:py-24 lg:px-10 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Inventory management <span className="text-primary">reimagined</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Digitize and streamline all stock-related operations. Replace manual registers and Excel sheets with a
              centralized, real-time system.
            </p>
            <div className="flex gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Live Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Secure Data</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span>Real-time Analytics</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted shadow-xl lg:aspect-square">
            <Image
              src="/abstract-geometric-shapes.png"
              alt="Inventory Dashboard Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-background/0" />
          </div>
        </section>

        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to run your warehouse
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Manage incoming and outgoing stock with ease.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Boxes}
                title="Product Management"
                description="Create and organize products with SKU codes, categories, and units of measure."
              />
              <FeatureCard
                icon={ArrowLeftRight}
                title="Stock Operations"
                description="Handle receipts, deliveries, and internal transfers with automated stock updates."
              />
              <FeatureCard
                icon={BarChart3}
                title="Real-time Dashboard"
                description="Track low stock, pending deliveries, and inventory health at a glance."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2025 StockMaster. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
