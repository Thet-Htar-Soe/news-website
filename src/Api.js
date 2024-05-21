import axios from "axios";

const API_KEY = process.env.REACT_APP_NEW_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Fetch Latest 3 articles for Header Page
export const fetchLatestArticles = async () => {
    const validArticles = [];
    let page = 1;

    while (validArticles.length < 3) {
        try {
            const response = await axios.get(`${BASE_URL}/top-headlines`, {
                params: {
                    sortBy: 'publishedAt',
                    country: 'us',
                    pageSize: 10,
                    page: page,
                    apiKey: API_KEY,
                },
            });

            const articles = response.data.articles;
            articles.forEach(article => {
                if (article.title && article.description && article.urlToImage) {
                    validArticles.push(article);
                }
            });

            if (articles.length < 10) {
                break;
            }

            page += 1;
        } catch (error) {
            console.error('Error fetching Latest Articles:', error);
            throw error;
        }
    }

    return validArticles.slice(0, 3);
}
