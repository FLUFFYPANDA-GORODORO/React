import React from 'react'

function Routes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Routes
