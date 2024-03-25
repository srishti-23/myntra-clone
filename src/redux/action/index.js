export const addCart = (product) => {
    return {
      type: "ADDITEM",
      payload: product
    };
  };
export const addWishlist = (product) => {
    return {
      type: "ADDITEM",
      payload: product
    };
  };
  
  // For Delete Item From Cart
  export const delCart = (product) => {
    return {
      type: "DELITEM",
      payload: product
    };
  };
  export const delWishlist = (product) => {
    return {
      type: "DELITEM",
      payload: product
    };
  };