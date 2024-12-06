import "@fontsource/poppins";
import "@/app/css/globals.css";
import Script from 'next/script';
import Image from 'next/image';
import Header from "@/components/Header/Header";
import { getCookie } from 'cookies-next';
import React from 'react';
import { GetServerSideProps } from 'next';
import "@/app/css/article.css";

interface Article {
    _id: string;
    author_id: string;
    author_name: string;
    title: string;
    description: string;
    keywords: string;
    body: string;
    created_time: string;
    views: number;
    impressions: number;
    country_views: number;
    slug: string;
    cover_image: string;
    updated_at: string;
    date: string;
}

interface ArticlePageProps {
    article: Article | null;
}

export const metadata = {
    title: "Find Your Perfect Articles, Every Time.",
    description: "Start reading now on Grovix Lab! Explore endless knowledge in your favorite category."
};

const App: React.FC<ArticlePageProps> = ({ article }) => {
    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <>
            <Header />
            <div className="topContainer">
                <div className="desktopMenu"></div>
                <div className="mainContainer">
                    <div className="fitCo">
                        <div className="articleContainer">
                            <article className="article">
                                <h1 className="article-title">{article?.title || 'Untitled'}</h1>
                                <p className="article-author">
                                    By {article?.author_name || 'Unknown'}&nbsp;|&nbsp;{article?.date || 'Date not available'}
                                </p>
                                {article?.cover_image ? (
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        className="article-image"
                                    />
                                ) : (
                                    <p>No cover image available</p>
                                )}

                                <section className="article-content">
                                    {article?.body ? (
                                        <div dangerouslySetInnerHTML={{ __html: article.body }} />
                                    ) : (
                                        <p>Content not available</p>
                                    )}
                                </section>

                            </article>
                        </div>
                        <div className="sectionTitle">
                            <h2>Related Articles</h2>
                        </div>
                        <div className="grideGroup">
                            {/* <Gride id={article._id} /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};



export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (context) => {
    const { slug } = context.params as { slug: string }; // Explicitly type params

    try {
        const jwt = await getCookie('token', { req: context.req, res: context.res });

        // Make a POST request to your API with the slug
        const response = await fetch(jwt ? 'http://192.168.1.60:3002/api/article/auth/fetch' : 'http://192.168.1.60:3002/api/article/fetch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(jwt && { 'Authorization': `${jwt}` })
            },
            body: JSON.stringify({ slug }), // Send the slug in the request body
        });

        if (!response.ok) {
            throw new Error('Failed to fetch article');
        }

        const data = await response.json();

        const article: Article = data.article; // Parse the JSON response


        return {
            props: { article: article }, // Pass the article to the component as a prop
        };
    } catch (error) {
        console.error(error);
        return {
            props: { article: null }, // Handle the error case
        };
    }
};

export default App;