import React from 'react'
import Link from 'next/link'
import './Header.css'

const Header = () => {
    return (
        < div className="navContainer">
            <ul className=" nav">

                <Link className="logo" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-shield"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.884 2.007l.114 -.007l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021z" /></svg> </Link>
                <Link className="special" href="/PRODUCT">PRODUCT  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg></Link>
                <Link href="/Pricing">PRICING</Link>
                <Link href="/Blog">BLOG </Link>
                <Link href="/Library">LIBRARY</Link>
                <Link href="/support">SUPPORT</Link>

            </ul>




            <div className="specialButton">
                <Link href="/Login">LOG IN</Link>

                <button> 30-DAY FREE TEAM TRIAL</button>
            </div>

        </div>


    )
}

export default Header
