// src/app/context/withAuth.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, ComponentType } from 'react'

function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const AuthComponent = (props: P) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
      } else {
        setIsAuthenticated(true)
      }
      setLoading(false)
    }, [])

    if (loading) return null

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }

  return AuthComponent
}

export default withAuth
