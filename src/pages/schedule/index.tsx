import FormAdvise from "@/components/modules/form-advise";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Container } from "@mui/material";
import styles from "./schedule.module.scss";
import { useRef } from "react";

const courses = [
  {
    id: "1",
    code: "JS101",
    name: "JavaScript Cơ Bản",
    schedule: "15/01/2025",
  },
  {
    id: "2",
    code: "REACT201",
    name: "ReactJS Nâng Cao",
    schedule: "22/01/2025",
  },
  {
    id: "3",
    code: "TS301",
    name: "TypeScript Từ Cơ Bản Đến Nâng Cao",
    schedule: "05/02/2025",
  },
  {
    id: "4",
    code: "NEXT401",
    name: "Next.js Full-Stack Development",
    schedule: "12/02/2025",
  },
  {
    id: "5",
    code: "NODE501",
    name: "Node.js Backend Development",
    schedule: "19/02/2025",
  },
  {
    id: "6",
    code: "CSS601",
    name: "SCSS & CSS Advanced Styling",
    schedule: "26/02/2025",
  },
  {
    id: "7",
    code: "VUE701",
    name: "Vue.js Framework",
    schedule: "05/03/2025",
  },
  {
    id: "8",
    code: "ANGULAR801",
    name: "Angular Development",
    schedule: "12/03/2025",
  },
  {
    id: "9",
    code: "PYTHON901",
    name: "Python Web Development",
    schedule: "19/03/2025",
  },
  {
    id: "10",
    code: "FULLSTACK1001",
    name: "Full-Stack JavaScript Developer",
    schedule: "26/03/2025",
  },
];

function Schedule() {
  const formRef = useRef<HTMLDivElement>(null);
  const handleScrollToForm = () => {
    if (formRef.current) {
      const top =
        formRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = 100;
      window.scrollTo({
        top: top - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.scheduleBg}>
        <Container>
          <div className={styles.tableWrap}>
            <div>
              <Badge className={styles.tableTitle}>Thông báo</Badge>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Lịch khai giảng</th>
                  <th>Mã khoá học</th>
                  <th>Tên khoá học</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => {
                  return (
                    <tr key={course.id}>
                      <td>{course.schedule}</td>
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className={styles.btnWrap}>
              <div className={styles.divider}></div>
              <Button className={styles.btn} onClick={handleScrollToForm}>
                Đăng ký ngay
              </Button>
              <div className={styles.divider}></div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.advise} ref={formRef}>
        <Container>
          <FormAdvise />
        </Container>
      </div>
    </div>
  );
}

export default Schedule;
