import axios from "axios";

const API_KEY = process.env.REACT_APP_NEW_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Reusable function for fetching articles
const fetchArticles = async (numberOfArticles,source) => {
    const validArticles = [];
    let page = 1;

    while (validArticles.length < numberOfArticles) {
        try {
            const response = await axios.get(`${BASE_URL}/top-headlines`, {
                params: {
                    category: source,
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

// Filter Articles
export const filterArticles = async (params) => {
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: { ...params, apiKey: API_KEY },
        });
        const filteredArticles = response.data.articles.filter(article => article.title && article.description && article.urlToImage);
        return filteredArticles.slice(0, 3);
    } catch (error) {
        console.error('Error filtering articles:', error);
        throw error;
    }
};

export const fetchLatestArticles = () => fetchArticles(3, 'general');

export const fetchTechnologyArticles = () => fetchArticles(3, 'technology')

export const fetchScienceArticles = () => fetchArticles(2, 'science');

export const fetchSportArticles = () => fetchArticles(2, 'sports');

export const fetchEntArticles = () => fetchArticles(6, 'entertainment');
