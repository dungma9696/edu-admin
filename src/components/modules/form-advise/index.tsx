import { Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import styles from "./advise.module.scss";
import { IAdvise } from "@/interface/advise";

const adviseSchema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email is not valid"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  name: yup.string(),
  courseCode: yup.string().required("Vui lòng chọn khóa học"),
});

const courseOptions = [
  {
    value: "JS101",
    label: "JavaScript Cơ Bản (JS101)",
  },
  {
    value: "REACT201",
    label: "React Nâng Cao (REACT201)",
  },
  {
    value: "TS301",
    label: "TypeScript Master (TS301)",
  },
  {
    value: "NEXT401",
    label: "Next.js Pro (NEXT401)",
  },
  {
    value: "NODE501",
    label: "Node.js Backend (NODE501)",
  },
];

function FormAdvise() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<IAdvise>({
    resolver: yupResolver(adviseSchema),
    defaultValues: {
      email: "",
      phone: "",
      name: "",
      courseCode: "",
    },
  });

  const onSubmit = async (data: IAdvise) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, sm: 12, md: 6 }} order={{ xs: 2, sm: 2, md: 1 }}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                inputType="text"
                label="Họ tên"
                placeholder="Nhập họ và tên của bạn"
                {...register("name")}
                helperText={errors.name?.message}
                state={errors.name ? "error" : "filled"}
              />
            </div>

            <div>
              <Input
                inputType="tel"
                label="Số điện thoại"
                placeholder="Nhập số điện thoại"
                {...register("phone")}
                helperText={errors.phone?.message}
                state={errors.phone ? "error" : "filled"}
              />
            </div>

            <div>
              <Input
                inputType="email"
                label="Email"
                placeholder="Nhập địa chỉ email"
                {...register("email")}
                helperText={errors.email?.message}
                state={errors.email ? "error" : "filled"}
              />
            </div>

            <div>
              <Controller
                name="courseCode"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    inputType="select"
                    label="Khóa học"
                    placeholder="Chọn khóa học bạn quan tâm"
                    options={courseOptions}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    helperText={fieldState.error?.message}
                    state={fieldState.error ? "error" : "filled"}
                  />
                )}
              />
            </div>

            <div className="flex-center">
              <Button
                type="submit"
                variant="primary"
                className={styles.btnAdvise}
              >
                Đăng ký
              </Button>
            </div>
          </form>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }} order={{ xs: 1, sm: 1, md: 2 }}>
          <div className={styles.courseInfo}>
            <div className={styles.courseImg}>
              <img src="images/advise/advise-1.jpg" />
              <img src="images/advise/advise-2.jpg" />
            </div>

            <h2>Đăng ký tư vấn miễn phí</h2>
            <p>Ưu đãi học bổng tới 10% khi đăng ký sớm</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormAdvise;
