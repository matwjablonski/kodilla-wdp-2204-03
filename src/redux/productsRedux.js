/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_USER_STAR = createActionName('ADD_USER_STAR');

/* action creators */
export const addFavoriteStar = payload => ({ payload, type: ADD_USER_STAR });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER_STAR:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userRating: true, stars: action.payload.i }
          : product
      );
    default:
      return statePart;
  }
}
