import React from 'react'
import SideBar from '../components/AdminComponents/SideBar'
import Dashboard from '../components/AdminComponents/Dashboard'
import Navbar from '../components/AdminComponents/Navbar'

const Home = () => {
  return (
    <React.Fragment>
      <section className="w-full isolate relative font-Poppins py-6 bg-slate-100">
        <div className="mx-auto max-w-full px-6 ">
          <div className='flex gap-8'>
            <SideBar />
            <div className='w-full'>
              <Navbar />
              <Dashboard />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
