let useSnackbarRef;
export const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const enqueueSnackbar = (...params) => {
  useSnackbarRef?.enqueueSnackbar(...params);
};
