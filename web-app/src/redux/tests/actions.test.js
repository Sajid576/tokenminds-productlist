import { setProducts, selectedProduct } from "../actions/productActions";
import { ActionTypes } from "../constants/action-types";

describe("testing product actions", () => {
  it("SET_PRODUCTS Action", () => {
    expect(setProducts()).toEqual({
      type: ActionTypes.SET_PRODUCTS,
    });
  });
  it("SELECTED_PRODUCT Action", () => {
    expect(selectedProduct()).toEqual({
      type: ActionTypes.SELECTED_PRODUCT,
    });
  });
});
