export  const getDataFromLocal = () => {
  const favoritesSTRFromLocal = localStorage.getItem("favorites");

  if (favoritesSTRFromLocal) {
    const favoritesArr = JSON.parse(favoritesSTRFromLocal);
    return favoritesArr;
  } else return [];
};

export const addToLocal = (phone) => {
  const favoritesArr = getDataFromLocal();
  const isExist = favoritesArr.find(p => p.id === phone.id)
  if(isExist) return
  favoritesArr.push(phone);
  const newFavoritesSTR = JSON.stringify(favoritesArr);
  localStorage.setItem("favorites", newFavoritesSTR);
};

export const removeFavorite = id => {
  const favorites = getDataFromLocal()
  const remainingFavorites = favorites.filter(p => p.id !== id)
  localStorage.setItem("favorites", JSON.stringify(remainingFavorites))
}



export  const getCart = () => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    const CartArr = JSON.parse(cart);
    return CartArr;
  } else return [];
};

export const addCart = (phone) => {
  const cartArr = getCart();
  const isExist = cartArr.find(p => p.id === phone.id)
  if(isExist) return
  cartArr.push(phone);
  const newCartSTR = JSON.stringify(cartArr);
  localStorage.setItem("cart", newCartSTR);
};

export const removeCart = id => {
  const cart = getCart()
  const remainingCart = cart.filter(p => p.id !== id)
  localStorage.setItem("cart", JSON.stringify(remainingCart))
}