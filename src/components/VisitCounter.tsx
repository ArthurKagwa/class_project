"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function VisitCounter() {
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    // Get current visits from localStorage
    const currentVisits = parseInt(localStorage.getItem('visits') || '0')
    
    // Increment visits
    const newVisits = currentVisits + 1
    
    // Save to localStorage
    localStorage.setItem('visits', newVisits.toString())
    
    // Update state
    setVisits(newVisits)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700"
    >
      <span className="mr-2">👥</span>
      {visits} site visits
    </motion.div>
  )
} 