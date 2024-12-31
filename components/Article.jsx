import '@/public/css/article.css'
import '@/public/css/global.css'
import Header from '../components/Header/Header.tsx'

const Article = ({ article }) => {
    return (
        <div className="article-page">
            <Header/>
            <div className='article-container'>
                <img src="/img/source/React-fetch-data.webp" alt="Image" />
                <h1>How to Fetch Data in React with useSWR</h1>
                <p>Learn to efficiently fetch and manage data in React using SWR. Explore caching, real-time updates, and error handling for optimized API requests</p>
                <div className='user-details'>
                    <img src="https://th.bing.com/th/id/OIP.eXWcaYbEtO2uuexHM8sAwwHaHa?rs=1&pid=ImgDetMain" alt="" />
                    <div className='name-date'>
                        <h4>Nafan P E</h4>
                        <p>Dec 11, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
