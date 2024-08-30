"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const Nav = () => {
    const pathName = usePathname();
    
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathName && "text-orange-400 border-b-2 border-orange-400"} capitalize font-medium hover:text-orange-400 transition-all`}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav