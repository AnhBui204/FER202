import React, { useState } from "react"
import { phimviet } from "../../dummyData"
import Home from "../homes/Home"
import "./style.css"

const PhimViet = () => {
  const [items, setItems] = useState(phimviet)
  return (
    <>
      <section className='trending'>
        <Home items={items} source="phimviet"/>
      </section>
    </>
  )
}

export default PhimViet
