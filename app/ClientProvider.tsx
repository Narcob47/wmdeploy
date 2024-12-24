"use client";

import { Provider } from "react-redux";
import store from "./redux/store"; // Adjust the path to your store

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;