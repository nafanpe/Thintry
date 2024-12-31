'use client'
import Link from "next/link";

function Read() {
    const blogPosts = [
        {
            id: 1,
            title: "How to Fetch Data in React with useSWR",
            image: "/img/source/React-fetch-data.webp",
            desciption: "Learn to efficiently fetch and manage data in React using SWR. Explore caching, real-time updates, and error handling for optimized API requests"
        },
        {
            id: 2,
            title: "What Are Portals in React?",
            image: "/img/source/React-About-Portals.webp",
            desciption: "In this blog, we'll cover React Portals, uses cases, code examples, caveats interview questions, and more!"
        },
        {
            id: 3,
            title: "Getting Started With Turborepo - Everything That You Need To Know",
            image: "/img/source/TurboRepo.webp",
            desciption: "Turborepo is a build system that addresses the challenges faced in managing monorepos. Learn about Turborepo, its features, how to use Turborepo, and more."
        },
        {
            id: 4,
            title: "What's New With Tailwind CSS v4.0?",
            image: "/img/source/tailwindcss.webp",
            desciption: "Discover what's new in Tailwind CSS v4.0! Faster builds, OKLCH colors, 3D transforms, container queries, and CSS-first config. Upgrade your CSS workflow today!"
        },
        {
            id: 5,
            title: "Everything You Need To Know About Next.js 15",
            image: "/img/source/nextjs.webp",
            desciption: "What's new with Next.js 15: Async Request APIs, Improved Caching, Enhanced Hydration Errors, Form Component, Support for React 19, and more!"
        }
    ]

    return (
        <>
            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <Link href="/articles" key={post.id} className='blog-card'>
                        <img src={post.image} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p>{post.desciption}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Read;