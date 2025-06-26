import { useState } from 'react'
import AuthHeader from '../components/Auth/AuthHeader'
import type { AuthMode } from '../types/auth';
import AuthMainButton from '../components/Auth/AuthMainButton';

const AuthPage = () => {

  const [authMode, setAuthMode] = useState<AuthMode>("signIn");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-md w-full space-y-8 mx-auto">
        <AuthHeader authMode={authMode}/>
        <div></div>
        <div className="bg-white">
          <AuthMainButton authMode={authMode}/>
        </div>
      </div>
    </div>
  )
}

export default AuthPage