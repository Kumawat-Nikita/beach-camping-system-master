import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import './packages.css';

const tiers = [
  {
    title: "Basic",
    price: "1000",
    description: [
      "Welcome Drink🍹",
      "Tent Stay🎪",
      "Breakfast🍳",
      "Music System🎵",
      "Games & Group Activities 🎤",
      "Unlimited Food🥘(non-veg/veg)",
      "Bonfire🔥",
      "BBQ🍗",
      "Washrooms Available🚻",
      "24/7 Care Taker👨🏻"
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Premium",
    price: "2000",
    description: [
        "Welcome Drink🍹",
        "Tent Stay with proper bedding 🎪",
        "Breakfast🍳",
        "Music System🎵",
        "Games & Group Activities 🎤",
        "Unlimited Food🥘(non-veg/veg)",
        "Bonfire🔥",
        "Evening Snacks",
        "Unlimited BBQ🍗",
        "Movie night",
        "Washrooms Available🚻",
        "24/7 Care Taker👨🏻",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  return (
    <div className="packages" id="packages">
      <React.Fragment>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />

        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Packages
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
            className="packageDescription"
          >
            Sometimes all you need is a warm bonfire and soft roaring waves crashing on the beach while you fall asleep closer to nature. And sometimes all you need is a Beach Camping.

Yes, you heard us right! Camping isn’t always done into the jungle or in the mountains or grasslands; it doesn’t always involve you into encountering a wild animal. Beach camping can be as exhilarating as any other camping, but the amount of fun and the memories you make when you camp on the beach is altogether a different experience.
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h4"
                        color="text.primary"
                      >
                        {tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /Person
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant}>
                      <NavLink to="/api/register">{tier.buttonText}</NavLink>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
