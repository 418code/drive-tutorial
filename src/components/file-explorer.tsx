"use client";

import type { FileSystemItem } from "~/lib/types";
import { FileCard } from "~/components/file-card";
import { FileRow } from "~/components/file-row";

interface FileExplorerProps {
  currentFolder: FileSystemItem;
  onFolderClick: (folder: FileSystemItem) => void;
  viewMode: "grid" | "list";
}

export function FileExplorer({
  currentFolder,
  onFolderClick,
  viewMode,
}: FileExplorerProps) {
  const folders =
    currentFolder.children?.filter((item) => item.type === "folder") ?? [];
  const files =
    currentFolder.children?.filter((item) => item.type === "file") ?? [];

  // Sort items alphabetically
  const sortedFolders = [...folders].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const sortedFiles = [...files].sort((a, b) => a.name.localeCompare(b.name));

  // Combine sorted folders and files
  const sortedItems = [...sortedFolders, ...sortedFiles];

  if (viewMode === "grid") {
    return (
      <div className="flex-1 overflow-auto p-6">
        <h2 className="mb-4 text-lg font-semibold">
          {currentFolder.name === "root" ? "My Drive" : currentFolder.name}
        </h2>

        {sortedItems.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            This folder is empty
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {sortedItems.map((item) => (
              <FileCard
                key={item.id}
                item={item}
                onClick={() => item.type === "folder" && onFolderClick(item)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto p-6">
      <h2 className="mb-4 text-lg font-semibold">
        {currentFolder.name === "root" ? "My Drive" : currentFolder.name}
      </h2>

      {sortedItems.length === 0 ? (
        <div className="py-12 text-center text-gray-500">
          This folder is empty
        </div>
      ) : (
        <div className="overflow-hidden rounded-md border">
          <div className="grid grid-cols-12 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500">
            <div className="col-span-6">Name</div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-2">Last modified</div>
            <div className="col-span-2">File size</div>
          </div>

          <div className="divide-y">
            {sortedItems.map((item) => (
              <FileRow
                key={item.id}
                item={item}
                onClick={() => item.type === "folder" && onFolderClick(item)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
