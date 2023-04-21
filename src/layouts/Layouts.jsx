import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import UseScrollTop from '../hooks/UseScrollTop'

export default function Layouts() {
  return (
    <>
    <UseScrollTop/>
    <Navbar/>
    <Outlet/>
    </>
  )
}
