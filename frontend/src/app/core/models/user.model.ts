export interface Role {
  id: string;
  name: string;
}

export interface User {
  name: string;
  surname: string;
  email: string;
  roles: string[];
}

export interface CreateUserDTO {
  name: string;
  surname: string;
  email: string;
  password: string;
  roles: string[];
}
