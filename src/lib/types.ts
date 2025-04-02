export type FileType = "document" | "image" | "spreadsheet" | "presentation" | "video" | "audio" | "other"

export interface FileSystemItem {
  id: string
  name: string
  type: "file" | "folder"
  fileType?: FileType
  size?: number
  modifiedAt: Date
  owner?: string
  children?: FileSystemItem[]
}

