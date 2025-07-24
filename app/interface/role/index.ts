import { IResponseList } from "..";
import { IPermission } from "../permission";

export interface IRole {
  id: number;
  code: string;
  name: string;
  permissions: IPermission[];
}

export interface INewRole {
  code: string;
  name: string;
  permissionIds: number[];
}

export interface IRoleStore {
  listRole: IResponseList<IRole> | null;
  loading: boolean;
  error: string;
}
