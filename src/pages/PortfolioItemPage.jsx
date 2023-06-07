export const PortfolioItemPage = ({ item }) => {
  return (
    <>
      <h2>{item.title}</h2>
      <img src={item.imageUrl} width="100" height="100" alt="project image" />
      <p>{item.description}</p>
    </>
  );
};
