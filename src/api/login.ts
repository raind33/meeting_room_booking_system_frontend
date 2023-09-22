import { RegisterUser } from "@/page/register/Register";
import { axiosInstance } from "./http";
import { UpdatePassword } from "@/page/update_password/UpdatePassword";
import { UserInfo } from "@/page/update_info/UpdateInfo";

export async function login(username: string, password: string) {
  return await axiosInstance.post('/user/login', {
      username, password
  });
}
export async function registerCaptcha(email: string) {
  return await axiosInstance.get('/user/register-captcha', {
      params: {
          address: email
      }
  });
}

export async function register(registerUser: RegisterUser) {
  return await axiosInstance.post('/user/register', registerUser);
}

export async function updatePasswordCaptcha(email: string) {
  return await axiosInstance.get('/user/update_password/captcha', {
      params: {
          address: email
      }
  });
}

export async function updatePassword(data: UpdatePassword) {
  return await axiosInstance.post('/user/update_password', data);
}
export async function getUserInfo() {
  return await axiosInstance.get('/user/info');
}

export async function updateInfo(data: UserInfo) {
  return await axiosInstance.post('/user/update', data);
}

export async function updateUserInfoCaptcha() {
  return await axiosInstance.get('/user/update/captcha');
}
