import products from '../../Data/product.json';

const initialState = products;

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      console.log(1);
      return {};
    default:
      return state;
  }
};

export default productsReducer;

//state.map( (product) => product.id === action.payload.id ? action.payload : product );