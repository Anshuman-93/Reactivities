import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
  activityStore: ActivityStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
};

export const StoreCotext = createContext(store);

export function useStore() {
  return useContext(StoreCotext);
}
