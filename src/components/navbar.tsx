"use client"

import { ChevronLeft, Grid, List, Search, Upload } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

interface NavbarProps {
  currentPath: string[]
  onBreadcrumbClick: (index: number) => void
  onBackClick: () => void
  viewMode: "grid" | "list"
  setViewMode: (mode: "grid" | "list") => void
  onUpload: () => void
  isUploading: boolean
}

export function Navbar({
  currentPath,
  onBreadcrumbClick,
  onBackClick,
  viewMode,
  setViewMode,
  onUpload,
  isUploading,
}: NavbarProps) {
  return (
    <div className="border-b bg-white sticky top-0 z-10">
      <div className="flex items-center p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onBackClick} disabled={currentPath.length === 0}>
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => onBreadcrumbClick(-1)}>My Drive</BreadcrumbLink>
              </BreadcrumbItem>

              {currentPath.map((segment, index) => (
                <BreadcrumbItem key={index}>
                  <BreadcrumbSeparator />
                  <BreadcrumbLink onClick={() => onBreadcrumbClick(index)}>{segment}</BreadcrumbLink>
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search in Drive" className="pl-8 w-[300px]" />
          </div>

          <div className="flex items-center border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="rounded-none rounded-l-md"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              className="rounded-none rounded-r-md"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          <Button onClick={onUpload} disabled={isUploading}>
            <Upload className="h-4 w-4 mr-2" />
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      </div>
    </div>
  )
}

