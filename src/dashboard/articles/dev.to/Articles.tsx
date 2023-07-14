import axios from "axios"

const getArticles = async() => {
    await axios.get('https://dev.to/api/articles', {
        params: {
            username: 'luqmanshaban'
        }
    }).then(response => {
        console.log(response);
        
    });
}

const getArticleById = async () => {
    const id = 1504752 || null;
    await axios.get(`https://dev.to/api/articles/${id}`, {
        params: {
            username: 'luqmanshaban'
        }
    }).then(response => {
        console.log(response);
        
    })
}

export const DevToArticles = () => {
    const Articles = {
        getArticles,
        getArticleById
    }

    return Articles;
}

