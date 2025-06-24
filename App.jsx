import React, { useState } from 'react'

const App = () => {
  // store form values 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Logged in Successfully");
  }

  return (
    <div className='flex items-center flex-cols justify-center min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Login In</h1>
        <div className="mb-4">
        <label className='block mb-1 text-gray-600'>Name</label>
        <input 
        type="text"
        className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-blue-400'
        value={name}
        placeholder='Enter your name'
        onChange={(e) => setName(e.target.value)}
        required
        />
        </div>

        <div className="mb-4">
          <label className='block mb-1 text-gray-600'>Email</label>
          <input 
          type="email"
          className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-blue-400'
          value={email}
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>

        <div className='mb-4'>
          <label className="block mb-1 text-grtay-600">Password</label>
          <input 
          type="password"
          value={password}
          className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-blue-400'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </div>

        <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
          Login
        </button>
      </form>
    </div>
  )
}

export default App