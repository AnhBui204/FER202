import React, { useState, useEffect } from "react"
import Home from "../homes/Home"
import "./style.css"

const PhimViet = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/phimviet")
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error("Error fetching phimviet data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className='trending'>
      <Home items={items} source="phimviet"/>
    </section>
  )
}

export default PhimViet
