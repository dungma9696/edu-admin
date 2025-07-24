import { Container, Divider, Grid } from "@mui/material";
import style from "./pricing.module.scss";
import Badge from "@/components/ui/badge";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@/components/ui/button";
import { Link } from "react-router";
function Pricing() {
  return (
    <div className={style.container}>
      <Container maxWidth="xl">
        <div className={`flex-center-col ${style.titleWrap}`}>
          <Badge badgeStyle="soft" variant="success">
            OUR PRICING
          </Badge>
          <h2 className="h2-black">
            Choose the plan that’s right for your business
          </h2>
          <p className="paragraph-18-gray">
            <span className="paragraph-18-black">
              Start with the Free plan{" "}
            </span>
            to try out our platform for an unlimited period of time.
            <Link to="" className={`flex-center ${style.startBtn}`}>
              Get started <ArrowForwardIcon />
            </Link>
          </p>
        </div>

        <div className={`${style.pricing}`}>
          <Grid container justifyContent={{ lg: "center" }} spacing={4}>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
              <div className={`${style.pricingCard} ${style.standard}`}>
                <div className={style.cardTop}>
                  <div className={style.price} style={{ color: "#183B56" }}>
                    $39 <span>/month</span>
                  </div>
                  <span className={style.title}>Standard</span>
                  <p className={`paragraph-16-gray ${style.cardDescription}`}>
                    All the basics for businesses that are just getting started.
                  </p>
                </div>
                <Divider />
                <div className={style.priceList}>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Single project use</p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Basic dashboard</p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">
                      All components included
                    </p>
                  </div>
                </div>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="outline"
                  className={style.btn}
                >
                  Get Started
                </Button>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
              <div className={`${style.pricingCard} ${style.essentials}`}>
                <div className={style.cardTop}>
                  <div className={style.price} style={{ color: "#36B37E" }}>
                    $99 <span>/month</span>
                  </div>
                  <span className={style.title}>Essentials</span>
                  <p className={`paragraph-16-gray ${style.cardDescription}`}>
                    Better for growing businesses that want more customers.
                  </p>
                </div>

                <Divider />
                <div className={style.priceList}>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Unlimited project use</p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Advanced dashboard</p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">
                      All components included
                    </p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Advanced insight</p>
                  </div>
                </div>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="outline"
                  className={style.btn}
                >
                  Get Started
                </Button>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
              <div className={`${style.pricingCard} ${style.premium}`}>
                <div className={style.cardTop}>
                  <div className={style.price} style={{ color: "#1565D8" }}>
                    $339 <span>/month</span>
                  </div>
                  <span className={style.title}>Premium</span>
                  <p className={`paragraph-16-gray ${style.cardDescription}`}>
                    Advanced features for pros who need more customization.
                  </p>
                </div>

                <Divider />
                <div className={style.priceList}>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Unlimited project use</p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Advanced dashboard</p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">
                      Mutlivariate components
                    </p>
                  </div>
                  <div className={style.priceItem}>
                    <div className={style.iconCheck}>
                      <CheckIcon />
                    </div>
                    <p className="paragraph-16-black">Phone Support</p>
                  </div>
                </div>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="primary"
                  className={style.btn}
                >
                  Get Started
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Pricing;
