"use client";

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const NavigationPageTest = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get('q')

  console.log(q);
  
  const handleClick = () => {
    router.push("/");
  }

  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationPageTest