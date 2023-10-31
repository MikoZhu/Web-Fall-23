import Logos from "../components/Logos";
import { useTranslation } from "react-i18next";

export const Translate = () => {
  const text = {
    heading: "Multi-language Elements",
    intro:
      "react-i18next is a powerful internationalization (i18n) framework for React applications. It allows developers to easily translate their apps into multiple languages, making them accessible to a wider audience. By using react-i18next, developers can manage translations and switch between languages seamlessly.",
  };

  // define via  destructured variable two methods from the useTranslation
  const { t, i18n } = useTranslation();

  // function to change the language
  const changeLanguageFunc = (lng) => {
    i18n.changeLanguage(lng);
  };

  const englishFunc = () => changeLanguageFunc("en");
  const swedishFunc = () => changeLanguageFunc("se");

  // If you want to store the translations inside an object inside the component for even better organization you can do as follows. They are implemented in line 38 ;)
  const content = {
    heading: t("translatePage.heading"),
    subHeading: t("translatePage.sub-heading"),
  };
  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
        <div>
          {/* Injected Directly */}
          <h2>{t("welcome")}</h2>
          <p>{t("text")}</p>
          {/* Stored inside an object variable for cleaner/readibility */}
          <p>{content.heading}</p>
          <p>{content.subHeading}</p>
          <div className="internationalization-wrapper">
            <button onClick={englishFunc}>English</button>
            <button onClick={swedishFunc}>Swedish</button>
          </div>
        </div>
      </div>
    </>
  );
};
