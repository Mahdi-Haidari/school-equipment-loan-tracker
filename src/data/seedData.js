export const initialEquipment = [
  {
    id: "eq-1",
    title: "Video Projector Epson",
    category: "presentation",
    totalUnits: 5,
    issuedUnits: 3,
    condition: "Good condition, remote control included"
  },
  {
    id: "eq-2",
    title: "Dell Latitude Laptop",
    category: "computing",
    totalUnits: 8,
    issuedUnits: 2,
    condition: "Slight scratches on casing"
  },
  {
    id: "eq-3",
    title: "Whiteboard Markers (Pack of 4)",
    category: "classroom supplies",
    totalUnits: 15,
    issuedUnits: 0,
    condition: "Brand new"
  }
];

export const initialIssues = [
  {
    id: "iss-1",
    equipmentId: "eq-1",
    borrowerAlias: "John Doe (Staff)",
    quantity: 2,
    dueDate: "2026-11-01",
    status: "active" 
  },
  {
    id: "iss-2",
    equipmentId: "eq-1",
    borrowerAlias: "Jane Smith (Teacher)",
    quantity: 1,
    dueDate: "2026-10-25",
    status: "active"
  },
  {
    id: "iss-3",
    equipmentId: "eq-2",
    borrowerAlias: "Ali Reza (Student)",
    quantity: 2,
    dueDate: "2026-10-15",
    status: "returned"
  }
];

export const categories = ["computing", "presentation", "classroom supplies"];
