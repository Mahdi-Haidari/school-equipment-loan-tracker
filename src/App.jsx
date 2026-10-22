import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Equipment from './pages/Equipment'
import IssueDesk from './pages/IssueDesk'
import ManageEquipment from './pages/ManageEquipment'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  const [equipment, setEquipment] = useState([])
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/equipment')
      .then(res => res.json())
      .then(data => setEquipment(data))

    fetch('http://localhost:5000/api/issues')
      .then(res => res.json())
      .then(data => setIssues(data))
  }, [])

  const handleResetData = () => {
    fetch('http://localhost:5000/api/reset', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setEquipment(data.equipment)
        setIssues(data.issues)
      })
  }

  const handleConfirmIssue = (newIssuesList) => {
    fetch('http://localhost:5000/api/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssuesList)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setEquipment(data.equipment)
          setIssues(data.issues)
        }
      })
  }

  const handleReturnUnits = (issueId, equipmentId, returnQty) => {
    fetch('http://localhost:5000/api/issues/return', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ issueId, equipmentId, returnQty })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setEquipment(data.equipment)
          setIssues(data.issues)
        }
      })
  }

  const handleAddEquipment = (newItem) => {
    fetch('http://localhost:5000/api/equipment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          fetch('http://localhost:5000/api/equipment')
            .then(res => res.json())
            .then(d => setEquipment(d))
        }
      })
  }

  const handleEditEquipment = (updatedItem) => {
    fetch(`http://localhost:5000/api/equipment/${updatedItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setEquipment(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item))
        }
      })
  }

  const handleDeleteEquipment = (id) => {
    fetch(`http://localhost:5000/api/equipment/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setEquipment(prev => prev.filter(item => item.id !== id))
        }
      })
  }

  const activeIssuesCount = issues.filter(i => i.status === 'active').length
  const returnedIssuesCount = issues.filter(i => i.status === 'returned').length

  return (
    <div className="min-h-screen bg-[#F8FAFC] bg-gradient-to-tr from-[#f1f5f9]/20 via-[#fafbfc] to-[#e0e7ff]/20 text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Navbar activeCount={activeIssuesCount} returnedCount={returnedIssuesCount} onReset={handleResetData} />
        <main className="w-full py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipment" element={<Equipment equipment={equipment} />} />
            <Route path="/issue-desk" element={<IssueDesk equipment={equipment} issues={issues} onConfirmIssue={handleConfirmIssue} onReturnUnits={handleReturnUnits} />} />
            <Route path="/manage" element={<ManageEquipment equipment={equipment} onAdd={handleAddEquipment} onEdit={handleEditEquipment} onDelete={handleDeleteEquipment} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
