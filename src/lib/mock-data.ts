import type { FileSystemItem } from "~/lib/types"

// Generate a random ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 10)
}

// Generate a random date within the last 30 days
function randomDate(): Date {
  const now = new Date()
  const daysAgo = Math.floor(Math.random() * 30)
  return new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000)
}

// Mock file system data
export const mockFileSystem: FileSystemItem = {
  id: "root",
  name: "root",
  type: "folder",
  modifiedAt: new Date(),
  children: [
    {
      id: generateId(),
      name: "Documents",
      type: "folder",
      modifiedAt: randomDate(),
      children: [
        {
          id: generateId(),
          name: "Project Proposal.docx",
          type: "file",
          fileType: "document",
          size: 2500000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Meeting Notes.docx",
          type: "file",
          fileType: "document",
          size: 1200000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Resume.pdf",
          type: "file",
          fileType: "document",
          size: 3500000,
          modifiedAt: randomDate(),
        },
      ],
    },
    {
      id: generateId(),
      name: "Images",
      type: "folder",
      modifiedAt: randomDate(),
      children: [
        {
          id: generateId(),
          name: "Vacation Photo.jpg",
          type: "file",
          fileType: "image",
          size: 4500000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Profile Picture.png",
          type: "file",
          fileType: "image",
          size: 2800000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Screenshot.png",
          type: "file",
          fileType: "image",
          size: 1500000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Family",
          type: "folder",
          modifiedAt: randomDate(),
          children: [
            {
              id: generateId(),
              name: "Birthday Party.jpg",
              type: "file",
              fileType: "image",
              size: 5200000,
              modifiedAt: randomDate(),
            },
            {
              id: generateId(),
              name: "Holiday.jpg",
              type: "file",
              fileType: "image",
              size: 4800000,
              modifiedAt: randomDate(),
            },
          ],
        },
      ],
    },
    {
      id: generateId(),
      name: "Spreadsheets",
      type: "folder",
      modifiedAt: randomDate(),
      children: [
        {
          id: generateId(),
          name: "Budget 2023.xlsx",
          type: "file",
          fileType: "spreadsheet",
          size: 1800000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Sales Report.xlsx",
          type: "file",
          fileType: "spreadsheet",
          size: 2200000,
          modifiedAt: randomDate(),
        },
      ],
    },
    {
      id: generateId(),
      name: "Presentations",
      type: "folder",
      modifiedAt: randomDate(),
      children: [
        {
          id: generateId(),
          name: "Company Overview.pptx",
          type: "file",
          fileType: "presentation",
          size: 6500000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Product Launch.pptx",
          type: "file",
          fileType: "presentation",
          size: 8200000,
          modifiedAt: randomDate(),
        },
      ],
    },
    {
      id: generateId(),
      name: "Videos",
      type: "folder",
      modifiedAt: randomDate(),
      children: [
        {
          id: generateId(),
          name: "Product Demo.mp4",
          type: "file",
          fileType: "video",
          size: 25000000,
          modifiedAt: randomDate(),
        },
        {
          id: generateId(),
          name: "Tutorial.mp4",
          type: "file",
          fileType: "video",
          size: 18000000,
          modifiedAt: randomDate(),
        },
      ],
    },
    {
      id: generateId(),
      name: "Project Plan.docx",
      type: "file",
      fileType: "document",
      size: 1800000,
      modifiedAt: randomDate(),
    },
    {
      id: generateId(),
      name: "Budget Overview.xlsx",
      type: "file",
      fileType: "spreadsheet",
      size: 2100000,
      modifiedAt: randomDate(),
    },
    {
      id: generateId(),
      name: "Company Logo.png",
      type: "file",
      fileType: "image",
      size: 3200000,
      modifiedAt: randomDate(),
    },
  ],
}

