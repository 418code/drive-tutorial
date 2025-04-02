"use client"

import type { FileSystemItem } from "~/lib/types"
import { FileCard } from "~/components/file-card"
import { FileRow } from "~/components/file-row"

interface FileExplorerProps {
  currentFolder: FileSystemItem
  onFolderClick: (folder: FileSystemItem) => void
  viewMode: "grid" | "list"
}

export function FileExplorer({ currentFolder, onFolderClick, viewMode }: FileExplorerProps) {
  const folders = currentFolder.children?.filter((item) => item.type === "folder") || []
  const files = currentFolder.children?.filter((item) => item.type === "file") || []

  // Sort items alphabetically
  const sortedFolders = [...folders].sort((a, b) => a.name.localeCompare(b.name))
  const sortedFiles = [...files].sort((a, b) => a.name.localeCompare(b.name))

  // Combine sorted folders and files
  const sortedItems = [...sortedFolders, ...sortedFiles]

  if (viewMode === "grid") {
    return (
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-lg font-semibold mb-4">
          {currentFolder.name === "root" ? "My Drive" : currentFolder.name}
        </h2>

        {sortedItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">This folder is empty</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sortedItems.map((item) => (
              <FileCard key={item.id} item={item} onClick={() => item.type === "folder" && onFolderClick(item)} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-lg font-semibold mb-4">{currentFolder.name === "root" ? "My Drive" : currentFolder.name}</h2>

      {sortedItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">This folder is empty</div>
      ) : (
        <div className="border rounded-md overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-100 py-2 px-4 text-sm font-medium text-gray-500">
            <div className="col-span-6">Name</div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-2">Last modified</div>
            <div className="col-span-2">File size</div>
          </div>

          <div className="divide-y">
            {sortedItems.map((item) => (
              <FileRow key={item.id} item={item} onClick={() => item.type === "folder" && onFolderClick(item)} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

