import Link from 'next/link'
import React from 'react'
import { FaCar } from 'react-icons/fa'
const Header = () => {
  return (
    <header className='header'>
<h1 className='logo'>KeM Autos</h1>
<nav>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/services">Services</Link>
<Link href="/latest">Latest</Link>
<Link href="/contact">Contact</Link>
    <FaCar style={{color: 'yellow', fontSize: '18px'}} />
</nav>

    </header>
  )
}

export default Header