import { IPermission } from "../permission";
import { IRole } from "../role";

export interface IUser {
  id: number;
  createdById: number;
  updatedById: number;
  createdByUsername: string;
  updatedByUsername: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  username: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  province: string;
  birthDay: string;
  targetScore: number;
  avatar: string;
  roles: IRole[];
  certificate: string;
  slogan: string;
  source: string;
  job: string;
  statusPayment: string;
  hasExam: boolean;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export interface IProfileState {
  username: string;
  permissions: IPermission[];
  loading: boolean;
  profile: IUser | null;
  error: string;
}
