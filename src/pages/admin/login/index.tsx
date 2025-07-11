import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./login.module.scss";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useNavigate } from "react-router";
import { login } from "@/api/auth.api";
import { profileAction } from "@/features/profile/profile.store";
import { LoginParams } from "@/interface/user/login";
import { enqueueSnackbar } from "notistack";
import { useAppDispatch } from "@/stores";
import { getMessageError } from "@/utils/convert-data";
import { IResponseError } from "@/interface";
import { MESSAGE_STATUS } from "@/constants/common.const";
import { PATH_PUBLIC } from "@/constants/router.const";

// Schema validation
const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginParams) => {
    try {
      const res = await login(data);
      if (res && res.accessToken) {
        dispatch(profileAction.setProfile(res.user));
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);

        enqueueSnackbar(MESSAGE_STATUS.LOGIN_SUCCESSFULLY, {
          variant: "success",
        });
        navigate(`${PATH_PUBLIC.ADMIN}/dashboard`);
      }
    } catch (error) {
      const textError = getMessageError(error as IResponseError);
      enqueueSnackbar(textError, { variant: "error" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className="h2-black">Login</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              inputType="text"
              label="Email"
              placeholder="Enter your email"
              {...register("email")}
              helperText={errors.email?.message}
              state={errors.email ? "error" : "filled"}
            />
          </div>
          <div className={styles.inputWrap}>
            <Input
              inputType="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password")}
              helperText={errors.password?.message}
              state={errors.password ? "error" : "filled"}
            />
          </div>
          <Button type="submit" variant="primary" className={styles.btnLogin}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
