import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { ModeToggle } from "./components/mode-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, BarChart3 } from "lucide-react"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import data from "./data.json"
import './App.css'

const revenueData = [
  { name: "Lun", value: 400 },
  { name: "Mar", value: 300 },
  { name: "Mié", value: 520 },
  { name: "Jue", value: 380 },
  { name: "Vie", value: 430 },
  { name: "Sáb", value: 350 },
  { name: "Dom", value: 200 },
]

const teamMembers = [
  { id: 1, name: "Alex Johnson", role: "Product Manager", online: true, avatar: "AJ" },
  { id: 2, name: "Maria García", role: "UX Designer", online: true, avatar: "MG" },
  { id: 3, name: "David Kim", role: "Developer", online: false, avatar: "DK" },
  { id: 4, name: "Sarah Wilson", role: "Marketing", online: true, avatar: "SW" },
  { id: 5, name: "Carlos Méndez", role: "Support", online: false, avatar: "CM" },
]

function App() {
  return (
<SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex flex-1 items-center justify-between">
            <h1 className="text-lg font-semibold"></h1>
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {/* Team Members: Avatares del equipo online */}
            <Card className="aspect-video">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="relative inline-flex">
                        <div
                          className={`
                            flex h-8 w-8 items-center justify-center rounded-full border-2 border-background 
                            ${member.online ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}
                            text-xs font-medium
                          `}
                        >
                          {member.avatar}
                        </div>
                        {member.online && (
                          <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-1 ring-background" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">Active members</div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">3 / 5 online</span>
                      <span className="text-green-600">60%</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {teamMembers.slice(0, 3).map((member) => (
                        <div key={member.id} className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${member.online ? "bg-green-500" : "bg-gray-300"}`} />
                          <span className="text-xs truncate">{member.name}</span>
                          <span className="text-xs text-muted-foreground ml-auto">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Chart: Gráfico de barras pequeño */}
            <Card className="aspect-video">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly income</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[120px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                      <Tooltip
                        cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="text-xs font-medium">{payload[0].payload.name}</div>
                                <div className="text-xs font-bold">${payload[0].value}</div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Bar dataKey="value" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <div className="text-muted-foreground">Total week</div>
                  <div className="font-medium">$2,580</div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Usuarios activos con barra de progreso */}
            <Card className="aspect-video">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +180
                  </span>
                  New this week
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Active now</span>
                    <span className="font-medium">573</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "24%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <div>0</div>
                    <div>1000</div>
                    <div>2000</div>
                    <div>3000</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App