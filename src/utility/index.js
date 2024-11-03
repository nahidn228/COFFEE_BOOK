import { toast } from "react-toastify";

//Local Storage

//add s coffee from local storage
// get All coffee from local storage
// remove selected coffee from local storage

// get All coffee from local storage

const getAllFavorite = () => {
  const allCoffee = localStorage.getItem("favorite");
  if (allCoffee) {
    const favorites = JSON.parse(allCoffee);
    return favorites;
  } else {
    return [];
  }
};

//add s coffee from local storage

const addFavorite = (coffee) => {
  //get all previously saved coffee
  const favorites = getAllFavorite();

  const isExist = favorites.find((item) => item.id === coffee.id);
  if (isExist) {
    return toast.warning("This Coffee is already exist");
  }

  favorites.push(coffee);
  localStorage.setItem("favorite", JSON.stringify(favorites));
  toast.success("Successfully added");
};

// remove selected coffee from local storage

export { addFavorite, getAllFavorite };
