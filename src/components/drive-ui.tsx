"use client"

import { useState } from "react"
import { FileExplorer } from "~/components/file-explorer"
import { Sidebar } from "~/components/sidebar"
import { Navbar } from "~/components/navbar"
import { mockFileSystem } from "~/lib/mock-data"
import type { FileSystemItem } from "~/lib/types"

export function DriveUI() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [currentFolder, setCurrentFolder] = useState<FileSystemItem>(mockFileSystem)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isUploading, setIsUploading] = useState(false)

  const navigateToFolder = (path: string[]) => {
    let current = mockFileSystem

    // Navigate to root if path is empty
    if (path.length === 0) {
      setCurrentFolder(mockFileSystem)
      setCurrentPath([])
      return
    }

    // Navigate through the path
    for (const segment of path) {
      const found = current.children?.find((item) => item.name === segment && item.type === "folder")

      if (found && found.type === "folder") {
        current = found
      } else {
        // If path is invalid, stay at current location
        return
      }
    }

    setCurrentFolder(current)
    setCurrentPath(path)
  }

  const handleFolderClick = (folder: FileSystemItem) => {
    if (folder.type === "folder") {
      navigateToFolder([...currentPath, folder.name])
    }
  }

  const handleBreadcrumbClick = (index: number) => {
    navigateToFolder(currentPath.slice(0, index + 1))
  }

  const handleBackClick = () => {
    if (currentPath.length > 0) {
      navigateToFolder(currentPath.slice(0, -1))
    }
  }

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar
        currentPath={currentPath}
        onBreadcrumbClick={handleBreadcrumbClick}
        onBackClick={handleBackClick}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onUpload={handleUpload}
        isUploading={isUploading}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPath={currentPath} onNavigate={navigateToFolder} />
        <FileExplorer currentFolder={currentFolder} onFolderClick={handleFolderClick} viewMode={viewMode} />
      </div>
    </div>
  )
}

