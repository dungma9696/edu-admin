import { MyFormItemProps } from "@/components/core/form-item";
import * as yup from "yup";
import dayjs from "dayjs";

import "@/styles/globals.scss";
import MyForm from "@/components/core/form";

const schema = yup.object().shape({
  fullName: yup.string().required("Họ tên là bắt buộc"),
  bio: yup.string().required("Giới thiệu là bắt buộc"),
  gender: yup.string().required("Giới tính là bắt buộc"),
  role: yup.string().required("Vai trò là bắt buộc"),
  dob: yup.date().required("Ngày sinh là bắt buộc"),
  agree: yup.boolean().oneOf([true], "Bạn phải đồng ý điều khoản"),
  newsletter: yup.boolean(),
  hobbies: yup
    .array()
    .min(1, "Chọn ít nhất một sở thích")
    .of(yup.string().required()),
});

const fields: MyFormItemProps[] = [
  {
    name: "fullName",
    label: "Họ tên",
    type: "input",
    defaultValue: "",
  },
  {
    name: "bio",
    label: "Giới thiệu bản thân",
    type: "textarea",
    defaultValue: "",
  },
  {
    name: "gender",
    label: "Giới tính",
    type: "radio",
    defaultValue: "male",
    options: [
      { label: "Nam", value: "male" },
      { label: "Nữ", value: "female" },
      { label: "Khác", value: "other" },
    ],
  },
  {
    name: "role",
    label: "Vai trò",
    type: "select",
    defaultValue: "",
    options: [
      { label: "Admin", value: "admin" },
      { label: "Editor", value: "editor" },
      { label: "Viewer", value: "viewer" },
    ],
  },
  {
    name: "dob",
    label: "Ngày sinh",
    type: "date",
    defaultValue: dayjs().format("YYYY-MM-DD"),
  },
  {
    name: "hobbies",
    label: "Sở thích",
    type: "checkbox-group",
    defaultValue: [],

    options: [
      { label: "Đọc sách", value: "reading" },
      { label: "Du lịch", value: "traveling" },
      { label: "Chơi game", value: "gaming" },
      { label: "Âm nhạc", value: "music" },
    ],
  },
  {
    name: "agree",
    label: "Tôi đồng ý với điều khoản",
    type: "checkbox",
    defaultValue: false,
  },
  {
    name: "newsletter",
    label: "Nhận email thông báo",
    type: "switch",
    defaultValue: true,
  },
];

const fields2: MyFormItemProps[] = [
  {
    name: "fullName",
    label: "Họ tên",
    type: "input",
    defaultValue: "",
    gridProps: { xs: 6 },
  },
  {
    name: "fullName",
    label: "Họ tên",
    type: "input",
    defaultValue: "",
    gridProps: { xs: 6 },
  },
  {
    name: "bio",
    label: "Giới thiệu bản thân",
    type: "textarea",
    defaultValue: "",
  },
  {
    name: "gender",
    label: "Giới tính",
    type: "radio",
    defaultValue: "male",
    row: true,
    options: [
      { label: "Nam", value: "male" },
      { label: "Nữ", value: "female" },
      { label: "Khác", value: "other" },
    ],
  },
  {
    name: "role",
    label: "Vai trò",
    type: "select",
    defaultValue: "",
    options: [
      { label: "Admin", value: "admin" },
      { label: "Editor", value: "editor" },
      { label: "Viewer", value: "viewer" },
    ],
  },
  {
    name: "dob",
    label: "Ngày sinh",
    type: "date",
    defaultValue: dayjs().format("YYYY-MM-DD"),
  },
  {
    name: "hobbies",
    label: "Sở thích",
    type: "checkbox-group",
    defaultValue: [],
    row: true,
    options: [
      { label: "Đọc sách", value: "reading" },
      { label: "Du lịch", value: "traveling" },
      { label: "Chơi game", value: "gaming" },
      { label: "Âm nhạc", value: "music" },
    ],
  },
  {
    name: "agree",
    label: "Tôi đồng ý với điều khoản",
    type: "checkbox",
    defaultValue: false,
  },
  {
    name: "newsletter",
    label: "Nhận email thông báo",
    type: "switch",
    defaultValue: true,
  },
];

type FormData = {
  fullName: string;
  bio: string;
  gender: string;
  role: string;
  dob: string;
  hobbies: string[];
  agree: boolean;
  newsletter: boolean;
};

function Form() {
  const handleSubmit = (data: FormData) => {
    console.log("Dữ liệu gửi đi:", data);
  };
  return (
    <div>
      <div>
        <h1 className="h1-primary">Form</h1>
        <MyForm options={fields} schema={schema} onSubmit={handleSubmit} />
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1 className="h1-primary">Form-2</h1>
        <MyForm options={fields2} schema={schema} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Form;
