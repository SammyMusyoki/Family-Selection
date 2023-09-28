import React, { createContext, useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState(() =>
      //useCallback to prevent rerenders
      localStorage.getItem("authTokens")
        ? jwt_decode(localStorage.getItem("authTokens"))
        : null
    );
    const [authTokens, setAuthTokens] = useState(() =>
      //useCallback to prevent rerenders
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );

    useEffect(() => {
      let fourMin = 1000 * 60 * 4;
      const interval = setInterval(() => {
        if (authTokens) {
          updateToken()
        }
      }, fourMin)
      return ()=> clearInterval(interval)
    }, [authTokens])


    // Register a User function
    const registerUser = async () => {
      try {
        
      } catch (error) {
        
      }
    }


    // Login User Func
    const loginUser = async (userInfo, navigate) => {
        try {
            const response = await fetch('http://localhost:8000/token/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                userInfo
              )
            });

            const userData = await response.json();

            if (response.status === 200 || response.status === 201) {
              setAuthTokens(userData)
              setUser(jwt_decode(userData.access));
              localStorage.setItem('authTokens', JSON.stringify(userData));
              navigate('family-selection-home/')
              setSuccessMessage("User logged in successfully")
            } else {
              const errorData = await response.json();
              setErrorMessage('Login failed: ' + errorData)
              // console.error(errorData)
            }
        } catch (e) {
          setErrorMessage('Error logging User in')
        }

        setTimeout(() => {
          setErrorMessage('')
          setSuccessMessage('')
        }, 5000)
    }

    // Updating the user token to keep the user logged in
    const updateToken = async () => {
      try {
        const response = await fetch("http://localhost:8000/token/refresh/", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({'refresh': authTokens.refresh})
        });
        const userData = await response.json()

        if (response.status === 200) {
          setAuthTokens(userData);
          setUser(jwt_decode(userData.access));
          localStorage.setItem('authTokens', JSON.stringify(userData));
        } else {
          logoutUser()
        }
      } catch (error) {
        
      }
    }


    const logoutUser = () => {
        localStorage.removeItem("authTokens");
        setUser(null);
        setAuthTokens(null);
        window.Location.href = "/";
        setSuccessMessage("User logged out successfully");

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
    }
    const contextData = {
        user: user,
        registerUser,
        loginUser,
        logoutUser,
        errorMessage,
        successMessage,
        setErrorMessage,
        setSuccessMessage,
    }
  return (
    <AuthContext.Provider value={contextData}>
      {
        children
      }
    </AuthContext.Provider>
  )
}



const useUserAuth = () => {
    const context = useContext(AuthContext)
        if (context === undefined) {
            throw new Error('useUserAuth must be used within a AuthContextProvider')
        }
    return context;
}

export {AuthContextProvider, useUserAuth }
