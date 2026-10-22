import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DB_FILE = "../data.json";

const seedData = {
  equipment: [
    {
      id: "eq-1",
      title: "Video Projector Epson",
      category: "presentation",
      totalUnits: 5,
      issuedUnits: 3,
      condition: "Good condition, remote control included",
    },
    {
      id: "eq-2",
      title: "Dell Latitude Laptop",
      category: "computing",
      totalUnits: 8,
      issuedUnits: 2,
      condition: "Slight scratches on casing",
    },
    {
      id: "eq-3",
      title: "Whiteboard Markers (Pack of 4)",
      category: "classroom supplies",
      totalUnits: 15,
      issuedUnits: 0,
      condition: "Brand new",
    },
  ],
  issues: [
    {
      id: "iss-1",
      equipmentId: "eq-1",
      borrowerAlias: "John Doe (Staff)",
      quantity: 2,
      dueDate: "2026-11-01",
      status: "active",
    },
    {
      id: "iss-2",
      equipmentId: "eq-1",
      borrowerAlias: "Jane Smith (Teacher)",
      quantity: 1,
      dueDate: "2026-10-25",
      status: "active",
    },
  ],
};

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify(seedData, null, 2), "utf8");
}

const readDatabase = () => {
  return JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
};

const writeDatabase = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf8");
};

app.get("/api/equipment", (req, res) => {
  res.json(readDatabase().equipment);
});

app.get("/api/issues", (req, res) => {
  res.json(readDatabase().issues);
});

app.post("/api/issues", (req, res) => {
  const db = readDatabase();
  const newIssues = req.body;
  db.issues.push(...newIssues);

  newIssues.forEach((newIssue) => {
    const item = db.equipment.find((e) => e.id === newIssue.equipmentId);
    if (item) item.issuedUnits += newIssue.quantity;
  });

  writeDatabase(db);
  res.json({ success: true, equipment: db.equipment, issues: db.issues });
});

app.post("/api/issues/return", (req, res) => {
  const db = readDatabase();
  const { issueId, equipmentId, returnQty } = req.body;

  db.issues = db.issues.map((issue) => {
    if (issue.id === issueId) {
      const newQty = issue.quantity - returnQty;
      return {
        ...issue,
        quantity: newQty,
        status: newQty === 0 ? "returned" : "active",
      };
    }
    return issue;
  });

  db.equipment = db.equipment.map((item) => {
    if (item.id === equipmentId) {
      return { ...item, issuedUnits: item.issuedUnits - returnQty };
    }
    return item;
  });

  writeDatabase(db);
  res.json({ success: true, equipment: db.equipment, issues: db.issues });
});

app.post("/api/equipment", (req, res) => {
  const db = readDatabase();
  const newItem = { ...req.body, id: `eq-${Date.now()}`, issuedUnits: 0 };
  db.equipment.push(newItem);
  writeDatabase(db);
  res.json({ success: true, item: newItem });
});

app.put("/api/equipment/:id", (req, res) => {
  const db = readDatabase();
  db.equipment = db.equipment.map((item) =>
    item.id === req.params.id ? req.body : item,
  );
  writeDatabase(db);
  res.json({ success: true });
});

app.delete("/api/equipment/:id", (req, res) => {
  const db = readDatabase();
  db.equipment = db.equipment.filter((item) => item.id !== req.params.id);
  writeDatabase(db);
  res.json({ success: true });
});

app.post("/api/reset", (req, res) => {
  writeDatabase(seedData);
  res.json({ success: true, ...seedData });
});

app.listen(PORT, () => {
  console.log(
    `Full-Stack dynamic routing engine active on http://localhost:${PORT}`,
  );
});
export default app;
