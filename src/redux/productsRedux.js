/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompare = ({ products }) =>
  products.filter(product => product.compare === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TRIGGER_FAVORITE = createActionName('TRIGER_FAVORITE');
export const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
export const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROME_COMPARE');
export const REMOVE_ITEM = createActionName('REMOVE_ITEM');
const ADD_USER_STAR = createActionName('ADD_USER_STAR');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });
export const removeItem = payload => ({ payload, type: REMOVE_ITEM });
export const addFavoriteStar = payload => ({ payload, type: ADD_USER_STAR });
export const triggerFavorite = payload => ({ payload, type: TRIGGER_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE: {
      let compareCount = 0;
      for (let product of statePart) {
        if (product.compare) {
          compareCount++;
        }
      }
      return statePart.map(product => {
        if (product.id === action.payload && compareCount <= 3) {
          product.compare = true;
        }
        return product;
      });
    }

    case REMOVE_FROM_COMPARE: {
      return statePart.map(product =>
        product.id !== action.payload ? product : { ...product, compare: true }
      );
    }

    case REMOVE_ITEM: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.compare = false;
        }
        return product;
      });
    }

    case ADD_USER_STAR:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userRating: true, stars: action.payload.i }
          : product
      );

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
