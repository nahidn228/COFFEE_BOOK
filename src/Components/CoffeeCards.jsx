import { useParams } from "react-router-dom";

const CoffeeCards = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div>
      <h1>Coffe Card</h1>
    </div>
  );
};

export default CoffeeCards;
