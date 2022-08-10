import { setProducts } from "../actions/productActions";
import { ActionTypes } from "../constants/action-types";

describe("product actions", () => {
  it("Handle fetchProducts action", () => {
    expect(setProducts()).toEqual({
      type: ActionTypes.SET_PRODUCTS,
    });
  });
});
