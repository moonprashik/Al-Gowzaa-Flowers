// 'use client'

// import './globals.css'
// import { useEffect, useState } from 'react'
// import { useRouter, usePathname } from 'next/navigation'

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter()
//   const pathname = usePathname()
//   const [loading, setLoading] = useState(true)
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     const publicRoutes = ['/landingpage']

//     if (publicRoutes.includes(pathname)) {
//       setIsAuthenticated(true)
//       setLoading(false)
//       return
//     }

//     if (!token || token !== 'dummy-token') {
//       router.replace('/landingpage')  // Redirect immediately if no token
//       return
//     }

//     setIsAuthenticated(true)
//     setLoading(false)
//   }, [pathname, router])

//   return (
//     <html lang="en">
//       <body>
//         {loading && <div>Loading...</div>}
//         {!loading && isAuthenticated && children}
//       </body>
//     </html>
//   )
// }


'use client'

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
