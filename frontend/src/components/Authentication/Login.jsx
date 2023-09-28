import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Contexts/AuthContext'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser,} = useUserAuth();
    const userInfo = {
      username: username,
      password: password
    }

    const navigate = useNavigate()

    const handleLogin = (e) => {
      e.preventDefault()
      loginUser(userInfo, navigate)
    }
  return (
    <React.Fragment>
      <section className="w-full isolate relative bg-cyan-200">
        <div className="mx-auto max-w-[1560px] px-6 py-6 h-screen">
          <div className="max-w-md mx-auto">
            <div className="text-center my-4 space-y-2">
              <h1 className="text-4xl font-bold">Family Selection Supermarket</h1>
              <p className="text-md">
              </p>
            </div>
            <form
              action=""
              className="space-y-3 bg-cyan-50 border rounded-md  p-8"
            >
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  className="w-full border p-2 px-3 rounded-md outline-none"
                  placeholder="florence.jones"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border p-2 px-3 rounded-md outline-none"
                  placeholder="password"
                />
              </div>
              <button
                onClick={handleLogin}
                className="p-2 px-5 rounded-md shadow border border-cyan-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Login
