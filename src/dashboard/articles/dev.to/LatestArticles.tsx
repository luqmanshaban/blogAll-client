import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './LatestArticle.module.scss'
import { ImageList } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';

interface Article {
    id: number;
    title: string;
    description: string;
    url: string;
    cover_image: string
  }

  //adjust on small screens
function getGridCols() {
  return window.innerWidth >= 800 ? 2.5 : 1;
}
function cellHeight() {
  return window.innerWidth >= 800 ? 270 : 360;
}

const LatestArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const getLatest = async () => {
    try {
      const response = await axios.get('https://dev.to/api/articles/latest', {
        params: {
          username: 'luqmanshaban'
        }
      });
      setArticles(response.data);
    } catch (error) {
      console.error('Error retrieving latest articles:', error);
    }
  };

  useEffect(() => {
    getLatest();
  }, []);

  return (
    <div className={styles.latesArticles}>
      <h1>Latest Dev.to</h1>
      <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }}>
         {articles.slice(0, 3).map((article, index) => (
          <ImageListItem key={index} className={styles.artc}>
           <article key={article.id}>
             <img src={article.cover_image} alt={article.title} />
             <figure>
               <h2>{article.title}</h2>
               <p>{article.description}</p>
               <a href={article.url} target="_blank" rel="noopener noreferrer">
                 View Article
               </a>
             </figure>
           </article>
          </ImageListItem>
         ))}
      </ImageList>
    </div>
  );
};

export default LatestArticles;
