"use client"

import type { FileSystemItem } from "~/lib/types"
import {
  FileIcon,
  FolderIcon,
  FileTextIcon,
  FileImageIcon,
  FileSpreadsheetIcon,
  FileIcon as FilePresentationIcon,
  FileVideoIcon,
  FileAudioIcon,
} from "lucide-react"
import { formatFileSize, formatDate } from "~/lib/utils"

interface FileRowProps {
  item: FileSystemItem
  onClick: () => void
}

export function FileRow({ item, onClick }: FileRowProps) {
  const getIcon = () => {
    if (item.type === "folder") {
      return <FolderIcon className="h-5 w-5 text-yellow-400" />
    }

    switch (item.fileType) {
      case "document":
        return <FileTextIcon className="h-5 w-5 text-blue-500" />
      case "image":
        return <FileImageIcon className="h-5 w-5 text-green-500" />
      case "spreadsheet":
        return <FileSpreadsheetIcon className="h-5 w-5 text-emerald-500" />
      case "presentation":
        return <FilePresentationIcon className="h-5 w-5 text-orange-500" />
      case "video":
        return <FileVideoIcon className="h-5 w-5 text-red-500" />
      case "audio":
        return <FileAudioIcon className="h-5 w-5 text-purple-500" />
      default:
        return <FileIcon className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <div className="grid grid-cols-12 py-3 px-4 hover:bg-gray-50 cursor-pointer items-center" onClick={onClick}>
      <div className="col-span-6 flex items-center gap-3">
        {getIcon()}
        <span className="truncate">{item.name}</span>
      </div>
      <div className="col-span-2 text-sm text-gray-500">{item.owner || "Me"}</div>
      <div className="col-span-2 text-sm text-gray-500">{formatDate(item.modifiedAt)}</div>
      <div className="col-span-2 text-sm text-gray-500">
        {item.type === "file" ? formatFileSize(item.size || 0) : "—"}
      </div>
    </div>
  )
}

