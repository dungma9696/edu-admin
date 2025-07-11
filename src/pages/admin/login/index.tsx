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

// Schema validation
const loginSchema = yup.object({
  email: yup.string().required("Username is required"),
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
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = async (data: LoginParams) => {
    try {
      const res = await login(data);
      if (res && res.accessToken) {
        dispatch(profileAction.setProfile(res.user));
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);

        enqueueSnackbar("Login successfully", {
          variant: "success",
        });
      }

      navigate("/admin/dashboard");
    } catch (error) {
      const textError = getMessageError(error as IResponseError);
      enqueueSnackbar(textError, {
        variant: "error",
      });
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
              value={email}
              onValueChange={(val) =>
                setValue("email", Array.isArray(val) ? (val[0] ?? "") : val, {
                  shouldValidate: true,
                })
              }
              helperText={errors.email?.message}
              state={errors.email ? "error" : "filled"}
            />
          </div>
          <div className={styles.inputWrap}>
            <Input
              inputType="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onValueChange={(val) =>
                setValue(
                  "password",
                  Array.isArray(val) ? (val[0] ?? "") : val,
                  { shouldValidate: true },
                )
              }
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
