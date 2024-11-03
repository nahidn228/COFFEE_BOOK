import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  //console.log(data);
  //console.log(category);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredCoffee = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredCoffee);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);

  return (
    <div className="max-w-screen-xl  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 ">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>

      <button
        onClick={() => navigate("/coffees")}
        className="btn btn-outline hover:btn-warning text-gray-800 md:px-8"
      >
        View All
      </button>
    </div>
  );
};

export default CoffeeCards;
