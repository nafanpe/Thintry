"use client";

import '@/components/Header/Header.css';
import Link from 'next/link';
import {useEffect, useState} from 'react'

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true)

    const togglesidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            const isWide = window.innerWidth > 768
            setIsLargeScreen(isWide)
            if (isWide){
                setIsSidebarOpen(true)
            } else {
                setIsSidebarOpen(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])



    return (
        <>
        <div className={`menu-icon ${isSidebarOpen? 'open' : 'closed'}`} onClick={togglesidebar}>
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M4.5 6.5h15M4.5 12h15m-15 5.5h15'/></svg>
            <img src="/img/green-fire-logo-black-text.png" alt="THINTRY LOGO" />
        </div>

        <div className={`left-bar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <div className='logo'>
                <Link href="/">
                    <img src="/img/green-fire-logo-black-text.png" alt="Thintry.logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <div className='option-ul'>
                        <img src="/img/icons/home.svg" /><li><a href="/"> Read </a></li>
                    </div>

                    <div className='option-ul'>
                        <img src="/img/icons/rocket.svg" /><li><a href="/spotlight">Spotlight</a></li>
                    </div>

                    <div className='option-ul'>
                        <img src="/img/icons/search.svg" /><li><a href="/articles">Search</a></li>
                    </div>

                    {/* <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/articles"> Articles </a></li>
                        </div>

                        <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/jobs"> Jobs </a></li>
                        </div> */}
                </ul>
            </nav>
            <button className='quick-actions'>
                <img src="/img/icons/pencil.svg" alt="Img" />
                New Article
            </button>
            <button className='create-article'>
                {/* <img src="/assets/images/handwriting2.jpeg" alt="draw-image" /> 
                <h3>Hey, Do you Write?</h3>
                <p>Now, Publish your Article from your Profile</p>
                <h4>Create Article <img src="/img/icons/arrow-right.svg" alt="" /></h4> */}
            </button> 

            {isSidebarOpen && <div className='overlay' onClick={togglesidebar}></div>}
        </div>
        </>
    )
}

export default Header