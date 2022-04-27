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
export const addFavoriteStar = payload => ({ payload, type: ADD_USER_STAR });

const TRIGGER_FAVORITE = createActionName('TRIGER_FAVORITE');
export const triggerFavorite = payload => ({ payload, type: TRIGGER_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER_STAR:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userRating: true, stars: action.payload.i }
    case TRIGGER_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    default:
      return statePart;
  }
}
