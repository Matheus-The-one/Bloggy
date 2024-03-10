"use client"


import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemesSwitch = () => {
    const {theme,setTheme}=useTheme()
    const [mounted, setMounted] = useState(false)
    
    
    useEffect(() => {
        setMounted(true)
      }, [])

    
  if (!mounted) {
    return null
  }




  return (
   <button onClick={()=>setTheme(theme==='dark'?'light':'dark')}> {theme==='dark'?'light':'dark'}   </button> 
  )
}

export default ThemesSwitch