export const SET_PRODUCTS = 'SET_PRODUCTS';

export const updateProduct = (product) => ({
  type: "UPDATE_PRODUCTS",
  payload: product
});

export const setLoggedUser = (user) => ({
  type: "SET_LOGGEDUSER",
  payload: user
})

export const logout = () => ({
  type: "LOGOUT"
})