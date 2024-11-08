import { GET_KEY } from "../../constant";
import { instance } from "../../instance";

export const inviteService = async (data) => {
  const responce = await instance.getAll(GET_KEY.invite, data);
  return responce.data;
};
