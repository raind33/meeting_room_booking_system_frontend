import { axiosInstance } from "./http";

export async function userSearch(username: string, nickName: string, email: string, pageNo: number, pageSize: number) {
  return await axiosInstance.get('/user/list', {
      params: {
          username,
          nickName,
          email,
          pageNo,
          pageSize
      }
  });
}
export async function freeze(id: number) {
  return await axiosInstance.get('/user/freeze', {
      params: {
          id
      }
  });
}