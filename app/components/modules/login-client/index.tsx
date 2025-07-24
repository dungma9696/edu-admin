import Button from "@/components/ui/button";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, Divider, FormControlLabel, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./login.module.scss";
import Input from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router";

const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

type LoginProps = {
  onClose?: () => void;
};
function Login({ onClose }: LoginProps) {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isKeepLogin, setIsKeepLogin] = useState<boolean>(false);

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.iconWrap}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className={styles.formWrap}>
          <h2 className="h2-black ">Welcome back.</h2>
          <Button
            variant="primary"
            startIcon={
              <div className={`${styles.googleIcon} flex-center`}>
                <img src="/images/ic-google.png" />
              </div>
            }
            className={styles.btnLoginGoogle}
          >
            <span className="text-16-bold"> Sign in with Google</span>
          </Button>
          <div className={styles.loginText}>
            <Divider sx={{ flex: 1 }} />
            <p className="paragraph-16-black">Or, sign in with your email</p>
            <Divider sx={{ flex: 1 }} />
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                inputType="text"
                label="Email"
                placeholder="Enter your email"
                {...register("email")}
                helperText={errors.email?.message}
                state={errors.email ? "error" : "filled"}
                className={styles.input}
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
                className={styles.input}
              />
            </div>
            <div className={styles.forwardPass}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isKeepLogin}
                    onChange={(e) => setIsKeepLogin(e.target.checked)}
                    color="primary"
                  />
                }
                label="Keep me signed in"
                className={styles.keepLogin}
              />
              <Link to="">Forgot password?</Link>
            </div>
            <Button type="submit" variant="primary" className={styles.btnLogin}>
              <span className="text-16-bold">Sign in</span>
            </Button>
          </form>
          <div className={styles.registerLink}>
            <p className="paragraph-14-gray">Don’t have an account?</p>
            <Link to="">Sign up now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
