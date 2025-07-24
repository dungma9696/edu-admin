import { IResponseList } from "..";

export interface IPermission {
  id: number;
  code: string;
  name: string;
}

export interface INewPermission {
  code: string;
  name: string;
}

export interface IPermissionStore {
  listPermissions: IResponseList<IPermission> | null;
  loading: boolean;
  error: string;
}
