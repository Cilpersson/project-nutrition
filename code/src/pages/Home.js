import React from "react";
import { Provider } from "react-redux";
import { ScanBarcode } from "components/ScanBarcode";
import { products } from "reducers/products";
import { ui } from "reducers/ui";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const Home = () => {
  const reducer = combineReducers({ ui: ui.reducer, products: products.reducer});
  const store = configureStore({reducer})

  return (
    <Provider store={store}>
      <ScanBarcode/>
    </Provider>
  );
};
