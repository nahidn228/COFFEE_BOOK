import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Card from "./Card";

const CoffeeCards = () => {
  const data = useLoaderData();
  const { categoryId } = useParams();
  //console.log(data);
  //console.log(categoryId);
  const [coffees, setCoffees] = useState([data]);

  useEffect(() => {
    if (categoryId) {
      const filteredCoffee = [...data].filter(
        (coffee) => coffee.category === categoryId
      );
      setCoffees(filteredCoffee);
    } else {
      setCoffees(data);
    }
  }, [data, categoryId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 ">
      {coffees.map((coffee) => (
        // <p> {coffee.name} </p>
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
  );
};

export default CoffeeCards;
