// import entities
// import { UserEntity } from '../entities';

// models
import { IUser } from "../models";

let users: IUser[] = [];

const signIn = async (email: string) => {

};

const signUp = async (newUser: IUser) => {
  users.push(newUser);
};

const getUser = async (email: string) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log(users[i])
      return users[i];
    }
  }

  return null;
};

const getUserById = async (id: number) => {
  if (users[id]) {
    return users[id]
  }

  return null;
};

const getAllUsers = async () => {
  return users;
}

export {
  signIn,
  signUp,
  getUser,
  getUserById,
  getAllUsers
};
