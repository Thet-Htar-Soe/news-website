import axios from "axios";

const API_KEY = process.env.REACT_APP_NEW_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Reusable function for fetching articles
const fetchArticles = async (numberOfArticles,endpoint) => {
    const validArticles = [];
    let page = 1;

    while (validArticles.length < numberOfArticles) {
        try {
            const response = await axios.get(`${BASE_URL}/${endpoint}`, {
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

    return validArticles.slice(0, numberOfArticles);
}

export const fetchLatestArticles = () => fetchArticles(3, 'top-headlines');

export const fetchTechnologyArticles = () => fetchArticles(3, 'top-headlines')

export const fetchTravelArticles = () => fetchArticles(2, 'top-headlines');

export const fetchSportArticles = () => fetchArticles(2, 'top-headlines');

export const fetchEntArticles = () => fetchArticles(6, 'top-headlines');
