export interface UserCollection {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserDocument extends UserCollection {}
