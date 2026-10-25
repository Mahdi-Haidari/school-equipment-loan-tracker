import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Equipment from './pages/Equipment'
import IssueDesk from './pages/IssueDesk'
import ManageEquipment from './pages/ManageEquipment'
import About from './pages/About'
import Contact from './pages/Contact'

const API_BASE_URL = 'https://school-equipment-loan-tracker.onrender.com'

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-white py-6 text-center text-xs font-bold text-slate-400 w-full">
      <div className="max-w-[1600px] mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Library Loan Desk Management Architecture. States verified.</p>
        <p>Architected by <a href="https://your-portfolio.com" target="_blank" rel="noreferrer" className="text-[#2563EB] font-black underline hover:text-blue-700 transition-colors">Your Name</a></p>
      </div>
    </footer>
  )
}

function App() {
  const [equipment, setEquipment] = useState([])
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/equipment`)
      .then(res => res.json())
      .then(data => setEquipment(data))

    fetch(`${API_BASE_URL}/api/issues`)
      .then(res => res.json())
      .then(data => setIssues(data))
  }, [])

  const handleResetData = () => {
    fetch(`${API_BASE_URL}/api/reset`, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setEquipment(data.equipment)
        setIssues(data.issues)
      })
  }

  const handleConfirmIssue = (newIssuesList) => {
    fetch(`${API_BASE_URL}/api/issues`, {
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
    fetch(`${API_BASE_URL}/api/issues/return`, {
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
    fetch(`${API_BASE_URL}/api/equipment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          fetch(`${API_BASE_URL}/api/equipment`)
            .then(res => res.json())
            .then(d => setEquipment(d))
        }
      })
  }

  const handleEditEquipment = (updatedItem) => {
    fetch(`${API_BASE_URL}/api/equipment/${updatedItem.id}`, {
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
    fetch(`${API_BASE_URL}/api/equipment/${id}`, { method: 'DELETE' })
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
