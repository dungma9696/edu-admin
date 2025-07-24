import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { PhonelinkLockOutlined } from "@mui/icons-material";
import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import "../../styles/globals.scss";
import Form from "./components/form";
import Table from "./components/table";

function DevComponent() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("male");

  const options = [
    { value: "vn", label: "Việt Nam" },
    { value: "us", label: "Hoa Kỳ" },
    { value: "jp", label: "Nhật Bản" },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="dev-tabs">
        <Tab label="Button" />
        <Tab label="Badge" />
        <Tab label="Input" />
        <Tab label="Form" />
        <Tab label="Table" />
      </Tabs>

      {tabIndex === 0 && (
        <Box sx={{ mt: 3 }}>
          <h1 className="h1-primary">Button</h1>

          <Grid container spacing={2}>
            <Grid>
              <Button variant="primary">Primary</Button>
            </Grid>
            <Grid>
              <Button variant="secondary">Secondary</Button>
            </Grid>
            <Grid>
              <Button variant="danger">Danger</Button>
            </Grid>
            <Grid>
              <Button variant="disabled">Disabled</Button>
            </Grid>
            <Grid>
              <Button variant="outline">Outline</Button>
            </Grid>
            <Grid>
              <Button variant="success">Success</Button>
            </Grid>
          </Grid>
        </Box>
      )}

      {tabIndex === 1 && (
        <div style={{ marginTop: "50px" }}>
          <h1 className="h1-secondary">Badge</h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={1}>
                <Badge variant="primary">Badge</Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="secondary">Badge</Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="error">Badge</Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="success">Badge</Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="warning">Badge</Badge>
              </Grid>

              <Grid size={1}>
                <Badge variant="primary" badgeStyle="outlined">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="secondary" badgeStyle="outlined">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="error" badgeStyle="outlined">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="success" badgeStyle="outlined">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="warning" badgeStyle="outlined">
                  Badge
                </Badge>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2}>
              <Grid size={1}>
                <Badge variant="primary" badgeStyle="soft">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="secondary" badgeStyle="soft">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="error" badgeStyle="soft">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="success" badgeStyle="soft">
                  Badge
                </Badge>
              </Grid>
              <Grid size={1}>
                <Badge variant="warning" badgeStyle="soft">
                  Badge
                </Badge>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}

      {tabIndex === 2 && (
        <div style={{ marginTop: "50px" }}>
          <h1 className="h1-primary">Input</h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Input
                  inputType="text"
                  label="Tên người dùng"
                  placeholder="Nhập tên của bạn"
                  value={username}
                  onValueChange={(val) => setUsername(String(val))}
                  state="filled"
                />
              </Grid>
              <Grid size={4}>
                <Input
                  inputType="email"
                  label="Email"
                  placeholder="Nhập email"
                  value={email}
                  onValueChange={(val) =>
                    setEmail(typeof val === "string" ? val : "")
                  }
                  helperText="Email không hợp lệ"
                  validate={(val) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val))
                  }
                />
              </Grid>
              <Grid size={4}>
                <Input
                  inputType="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onValueChange={(val) => setPassword(String(val))}
                />
              </Grid>
              <Grid size={4}>
                <Input
                  inputType="tel"
                  label="Số điện thoại"
                  placeholder="0123 456 789"
                  value={phone}
                  onValueChange={(val) => setPhone(String(val))}
                  leftIcon={<PhonelinkLockOutlined />}
                />
              </Grid>
              <Grid size={4}>
                <Input
                  inputType="number"
                  label="Tuổi"
                  placeholder="Nhập tuổi"
                  value={age}
                  onValueChange={(val) => setAge(String(val))}
                />
              </Grid>
              <Grid size={4}>
                <Input
                  inputType="select"
                  label="Quốc gia"
                  placeholder="Chọn quốc gia"
                  value={country}
                  onValueChange={(val) => setCountry(String(val))}
                  options={options}
                />
              </Grid>
              <Grid size={4}>
                <Input
                  inputType="checkbox"
                  label="Chọn sở thích"
                  value={hobbies}
                  options={[
                    { value: "reading", label: "Reading" },
                    { value: "sports", label: "Sports" },
                    { value: "music", label: "Music" },
                  ]}
                  onValueChange={(vals) => setHobbies(vals as string[])}
                />
              </Grid>

              <Grid size={4}>
                <Input
                  inputType="radio"
                  label="Chọn giới tính"
                  value={gender}
                  options={[
                    { value: "male", label: "Nam" },
                    { value: "female", label: "Nữ" },
                  ]}
                  onValueChange={(val) => setGender(val as string)}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      )}

      {tabIndex === 3 && (
        <Box sx={{ mt: 3 }}>
          <Form />
        </Box>
      )}

      {tabIndex === 4 && (
        <Box sx={{ mt: 3 }}>
          <Table />
        </Box>
      )}
    </Container>
  );
}

export default DevComponent;
