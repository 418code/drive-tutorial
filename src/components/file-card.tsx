"use client";

import type { FileSystemItem } from "~/lib/types";
import {
  FileIcon,
  FolderIcon,
  FileTextIcon,
  FileImageIcon,
  FileSpreadsheetIcon,
  FileIcon as FilePresentationIcon,
  FileVideoIcon,
  FileAudioIcon,
} from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { formatFileSize } from "~/lib/utils";

interface FileCardProps {
  item: FileSystemItem;
  onClick: () => void;
}

export function FileCard({ item, onClick }: FileCardProps) {
  const getIcon = () => {
    if (item.type === "folder") {
      return <FolderIcon className="h-12 w-12 text-yellow-400" />;
    }

    switch (item.fileType) {
      case "document":
        return <FileTextIcon className="h-12 w-12 text-blue-500" />;
      case "image":
        return <FileImageIcon className="h-12 w-12 text-green-500" />;
      case "spreadsheet":
        return <FileSpreadsheetIcon className="h-12 w-12 text-emerald-500" />;
      case "presentation":
        return <FilePresentationIcon className="h-12 w-12 text-orange-500" />;
      case "video":
        return <FileVideoIcon className="h-12 w-12 text-red-500" />;
      case "audio":
        return <FileAudioIcon className="h-12 w-12 text-purple-500" />;
      default:
        return <FileIcon className="h-12 w-12 text-gray-400" />;
    }
  };

  return (
    <Card
      className="cursor-pointer transition-colors hover:bg-gray-50"
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center p-4 text-center">
        <div className="mb-2">{getIcon()}</div>
        <div className="w-full truncate font-medium">{item.name}</div>
        {item.type === "file" && (
          <div className="mt-1 text-xs text-gray-500">
            {formatFileSize(item.size ?? 0)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
