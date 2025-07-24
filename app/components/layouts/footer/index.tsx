import { Box, Container, Grid, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Favorite,
} from "@mui/icons-material";
import style from "./footer.module.scss";
import { Link } from "react-router";

const socialIcons = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <LinkedIn />, href: "#" },
];
const productLinks = [
  "Landingpage",
  "Features",
  "Documentation",
  "Referral Program",
  "Pricing",
];

const serviceLinks = [
  "Documentation",
  "Design",
  "Themes",
  "Illustrations",
  "UI Kit",
];

const companyLinks = ["About", "Terms", "Privacy Policy", "Careers"];

const moreLinks = ["Documentation", "License", "Changelog"];
function Footer() {
  return (
    <div className={style.container}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid size={{ sm: 4, xs: 12 }} order={{ xs: 2, sm: 1 }}>
            <div className={style.footerLogo}>
              <img
                src="/images/header/logo-black.png"
                alt="Logo"
                width={120}
                height={36}
              />
              <p
                className={`${style.footerSlogan} ${"paragraph-16-gray-light"}`}
              >
                Build a modern and creative website with crealand
              </p>
              <Box className={style.socialMedia}>
                {socialIcons.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    className={style.socialButton}
                    size="small"
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </div>
          </Grid>
          <Grid size={{ sm: 8, xs: 12 }} order={{ xs: 1, sm: 2 }}>
            <Grid spacing={{ xs: 7, sm: 2 }} container>
              <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                <div>
                  <h6 className="h6-black">Product</h6>
                  <div className={style.linkList}>
                    {productLinks.map((link, index) => (
                      <Link
                        key={index}
                        to="#"
                        className={`${style.footerLink} ${"paragraph-16-black"}`}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                <div>
                  <h6 className="h6-black">Services</h6>
                  <div className={style.linkList}>
                    {serviceLinks.map((link, index) => (
                      <Link
                        key={index}
                        to="#"
                        className={`${style.footerLink} ${"paragraph-16-black"}`}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                <div>
                  <h6 className="h6-black">Company</h6>
                  <div className={style.linkList}>
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to="#"
                        className={`${style.footerLink} ${"paragraph-16-black"}`}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                <div>
                  <h6 className="h6-black">More</h6>
                  <div className={style.linkList}>
                    {moreLinks.map((link, index) => (
                      <Link
                        key={index}
                        to="#"
                        className={`${style.footerLink} ${"paragraph-16-black"}`}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={style.footerCopyRight}>
          <IconButton className={style.favoriteButton} size="large">
            <Favorite />
          </IconButton>
          <p className="paragraph-16-gray-light ">
            Copyright © 2019. Crafted with love.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
