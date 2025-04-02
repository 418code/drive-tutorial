"use client"

import { FolderIcon, HardDrive, Star, Clock, Trash, Cloud } from "lucide-react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

interface SidebarProps {
  currentPath: string[]
  onNavigate: (path: string[]) => void
}

export function Sidebar({ currentPath, onNavigate }: SidebarProps) {
  const sidebarItems = [
    { name: "My Drive", icon: HardDrive, path: [] },
    { name: "Shared with me", icon: Cloud, path: ["Shared with me"] },
    { name: "Starred", icon: Star, path: ["Starred"] },
    { name: "Recent", icon: Clock, path: ["Recent"] },
    { name: "Trash", icon: Trash, path: ["Trash"] },
  ]

  return (
    <div className="w-64 border-r bg-white p-4 hidden md:block">
      <div className="space-y-1">
        {sidebarItems.map((item) => {
          const isActive =
            (item.path.length === 0 && currentPath.length === 0) ||
            (item.path.length > 0 && currentPath[0] === item.path[0])

          return (
            <Button
              key={item.name}
              variant="ghost"
              className={cn("w-full justify-start", isActive && "bg-gray-100")}
              onClick={() => onNavigate(item.path)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          )
        })}
      </div>

      <div className="mt-8">
        <div className="text-sm font-medium text-gray-500 mb-2">Quick access</div>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <FolderIcon className="mr-2 h-4 w-4" />
            Documents
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FolderIcon className="mr-2 h-4 w-4" />
            Projects
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-sm font-medium text-gray-500 mb-2">Storage</div>
        <div className="bg-gray-100 rounded-full h-2 mb-2">
          <div className="bg-blue-500 h-2 rounded-full w-[65%]"></div>
        </div>
        <div className="text-xs text-gray-500">6.5 GB of 10 GB used</div>
      </div>
    </div>
  )
}

