import { GET_KEY } from "../../constant";
import { instance } from "../../instance";

export const purchaseService = async (data) => {
  const responce = await instance.getAll(GET_KEY.purchase, data);
  return responce.data;
};
