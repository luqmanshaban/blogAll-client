import axios from "axios"
import { useEffect, useState } from "react";
import { ImageList } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import styles from './AllArticles.module.scss'

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
  
const AllArticles = () => {
    const [article, setArticle] = useState<Article[]>([])

    const getArticles = async() => {
        await axios.get('https://dev.to/api/articles', {
            params: {
                username: 'luqmanshaban'
            }
        }).then(response => {
            setArticle(response.data)
        });
    
    }
    useEffect(() => {
        getArticles();
    }, []);

    return (
    <div className={styles.allArticles}>
      <h1>All Dev.to</h1>
      <ImageList cols={getGridCols()} rowHeight={cellHeight()} style={{ flexWrap: 'nowrap', }}>
         {article.map((article, index) => (
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
    )

}

export default AllArticles




