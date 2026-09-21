import { tesloApi } from '@/api/TesloApi';
import type { AuthResponse } from '../interfaces/auth.response';
import axios from 'axios';

export const registerAction = async (fullname: string, email: string, password: string): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
      fullName: fullname,
      email,
      password,
    });

    console.log("register_brou: ", data);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('ERROR COMPLETO:', error);
      console.log('STATUS:', error.response?.status);
      console.log('DATA:', error.response?.data);
      console.log('MESSAGE:', error.response?.data?.message);
    }
    throw error;
  }
};