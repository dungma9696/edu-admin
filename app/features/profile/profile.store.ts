import type { IUser, IProfileState } from "@/interface/user/user";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getProfileRequest } from "./profile.action";
import { IPermission } from "@/interface/permission";
import uniqBy from "lodash/uniqBy";
import { IRole } from "@/interface/role";

const initialState: IProfileState = {
  username: localStorage.getItem("username") || "",
  permissions: [],
  loading: false,
  profile: null,
  error: "",
};

const convertPermission = (roles: IRole[]) => {
  let permissions: IPermission[] = [];
  roles.forEach((item) => {
    permissions = permissions.concat(item.permissions);
  });

  permissions = uniqBy(permissions, "code");
  return permissions;
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<IUser>) {
      const permissions: IPermission[] = convertPermission(
        action.payload.roles,
      );

      state.profile = action.payload;
      state.permissions = permissions;
    },

    resetStore() {
      return initialState;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProfileState>) => {
    builder
      .addCase(getProfileRequest.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getProfileRequest.fulfilled, (state, action) => {
        state.loading = false;
        const permissions: IPermission[] = convertPermission(
          action.payload.roles,
        );
        state.profile = action.payload;
        state.permissions = permissions;
      })
      .addCase(getProfileRequest.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const profileAction = profileSlice.actions;

export default profileSlice.reducer;
