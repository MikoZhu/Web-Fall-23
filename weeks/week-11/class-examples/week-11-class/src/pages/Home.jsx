import Logos from "../components/Logos";

export const Home = () => {
  const text = {
    heading: "Let's learn how to use third party libraries",
    subheading: "Home Page",
    intro:
      "Imagine you're building a house, and you need furniture like chairs, tables, and a TV. Instead of making all these things yourself from scratch, you can go to a furniture store and buy ready-made furniture. These ready-made pieces are like third-party libraries in a React project. In React, a third-party library is like pre-made code created by other developers that you can use in your project. These libraries help you add features or functionality to your project without having to write everything from the beginning. It's like using pre-built furniture to make your house comfortable and functional faster and easier.",
  };

  return (
    <>
      <Logos />
      <h1 className="heading">{text.heading}</h1>
      <h2>{text.subheading}</h2>
      <p>{text.intro}</p>
    </>
  );
};

export default Home;
