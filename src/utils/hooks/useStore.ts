import React from "react";
import { MobXProviderContext } from "~/modules";
import store from "~/store";

export const useStores = (): typeof store => {
  return React.useContext(MobXProviderContext).rootStore;
};
