import { fetchProducts } from '../actions/productActions';
import { productReducer } from '../reducers/productReducer';

describe('product reducers', () => {
  it('returns initial state', () => {
    expect(productReducer(undefined, {})).toMatchSnapshot();
  });

  it('Handle fetchProducts action', () => {
    expect(productReducer(undefined, fetchProducts())).toMatchSnapshot();
  });
});
