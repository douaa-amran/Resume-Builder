import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload'

function App() {

  return (
<<<<<<< HEAD
    <>
     

      <FileUpload/>
    </>
=======
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth/:type" element={<Auth />} />
    </Routes>
  </div>
>>>>>>> 6a560b8fec01352d6acdf5d52713f95e44bac1c5
  )
}

export default App
