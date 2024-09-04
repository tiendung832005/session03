"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathName = usePathname();
  return (
    <div>
        <b className='mr-6'><Link  className={pathName == "/components/home"?"active":""} href={"/components/home"}>Home</Link></b>
        <b className='mr-6'><Link  className={pathName == "/components/about"?"active":""} href={"/components/about"}>About</Link></b>
        <b className='mr-6'><Link  className={pathName == "/components/contact"?"active":""} href={"/components/contact"}>Contact</Link></b>
        <b className='mr-6'><Link  className={pathName == "/components/login"?"active":""} href={"/components/login"}>Login</Link></b>
    </div>
  )
}
