// Importing necessary styles and data for the Article component
import "./Article.css";
import articleData from "../../enArticleData.json";
import { ArticleCard } from "./ArticleCard"; // Importing the ArticleCard component
import styled from "styled-components"; // Importing styled-components for styling
import { useTranslation } from "react-i18next"; // Importing the useTranslation hook from react-i18next library

// Styling for the main container of the Article component
const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 38px 15px;
`;

// Getting the list of articles from the imported data
let articleArray = articleData.articles;
console.log(articleArray);

// Exporting the Article component
export const ExampleArticle = () => {
  // -----
  // -----
  // -----
  // -----
  // -----
  const { t, ready } = useTranslation(); // Initializing the useTranslation hook for translations

  // Fetching the localized articles using the 't' function
  const articles = t("articles", { returnObjects: true });

  // Checking if translations are ready, if not, display a loading message
  if (!ready) return "loading translations...";

  // -----
  // -----
  // -----
  // -----
  // -----

  // EXPLANATION OF ABOVE
  //     In this part of the code, we're handling internationalization (i18n) within the Article component using the useTranslation hook from the react-i18next library. Here's what's happening:

  // We initialize the useTranslation hook, assigning the t function and a ready flag to the respective variables. This hook allows us to manage translations within our component.

  // We use the t function to fetch the localized articles. The "articles" key is used to identify the translation resource we want, and we specify { returnObjects: true } to ensure that we receive the articles as an array of objects.

  // In simpler terms, the returnObjects: true option means that when we use the t function to fetch translations, it will give us the translated data as an array of objects. It's like asking for the translations in a format that's easy to work with as a list of items, making it simpler to display them in our component.

  // To ensure that the translations are ready before rendering the component, we check the ready flag. If translations are not yet ready, we return a "loading translations..." message, indicating that the component is waiting for the translations to become available. This ensures that the component doesn't render with missing or incomplete translations, providing a smoother user experience.

  // Rendering the Article component with the fetched articles
  return (
    <>
      <ArticleWrapper className="article-wrapper">
        {articles.map((article, index) => (
          <ArticleCard key={index} articles={article} />
        ))}
      </ArticleWrapper>
    </>
  );
};
