export const Header = () => {
  const imageObject = {
    imgUrl:
      "https://blog.logomyway.com/wp-content/uploads/2021/05/pokemon-logo-png.png",
    imgAlt: "An image of the pokemon logo",
  };
  const headertext = "Pokemons Goe here";
  return (
    <header>
      <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
      <p>{headertext}</p>
    </header>
  );
};
