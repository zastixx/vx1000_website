import React from 'react'
import './googleAuth.css'

const GoogleAuth = () => {
  return (
    <div className='auth-container' style={{ backgroundColor: 'white', border: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, overflow: 'hidden', borderRadius: 40, borderColor: 'lightgray', width: 320, height: 35}}>
        <img className='google-auth-logo' src="/google.png" alt="google-auth-logo" style={{ width: 25 }}/>
        <h2 style={{ fontWeight: 500, fontSize: '1.1rem', color: '#2e2e2e'}} >Sign in with Google</h2>
    </div>
  )
}

export default GoogleAuth
