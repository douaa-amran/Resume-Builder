import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth/:type" element={<Auth />} />
    </Routes>
  </div>
  )
}

export default App
