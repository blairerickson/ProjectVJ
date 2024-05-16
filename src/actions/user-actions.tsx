'use server';

import connectDB from '@/config/connect-DB';
import { UserData } from '@/lib/types/user.types';
import userModel from '@/models/user-model';

export const getUsers = async () => {
  try {
    await connectDB();
    const users = await userModel.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get users');
  }
};

export const createUser = async (userData: UserData) => {
  try {
    await connectDB();

    if (!userData.name || !userData.email || !userData.phone_number) {
      throw new Error('Name, email and phone number are required');
    }

    const userExists = await userModel.findOne({ email: userData.email });
    if (userExists) {
      throw new Error('User already exists');
    }

    const newUser = await userModel.create(userData);
    return newUser;
  } catch (error) {
    console.error(error);
  }
};
