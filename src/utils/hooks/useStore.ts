import React from "react";
import { store } from "~/core";
import { MobXProviderContext } from "~/modules";

export const useStore = (): typeof store => {
  return React.useContext(MobXProviderContext).rootStore;
};
