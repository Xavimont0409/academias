import { create } from "zustand";
import { getRequest } from "../service/services";

export const typeClassStore = create()((get, set) => {
  const baseUrl = "classes";

  return {
		typeClasses: [],

		getAllClasses: async () => {
			const { typeClasses } = getRequest(baseUrl)
			set({ typeClasses })
		}
	};
});
