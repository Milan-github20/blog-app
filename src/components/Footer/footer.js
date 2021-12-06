import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./footer.module.css";
import Button from "@mui/material/Button";
import styles from "./footer.module.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8} className={styles.grid}>
        <Grid item xs={6}>
          <Item
            style={{ backgroundColor: "#F4F4F4" }}
            className={styles.itemGridLeftSide}
          >
            <h5
              style={{
                color: "#33A4D8",
                fontSize: "24px",
                fontWeight: "400",
              }}
            >
              Do you want to get our latest updates?
            </h5>
            <p style={{ lineHeight: "2" }}>
              Please subscribe our newsletter for upcoming new videos and latest
              information about our work. Thank you.
            </p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Your Email..." />
              <Button
                variant="contained"
                href="#main"
                style={{
                  backgroundColor: "#1674a0",
                  padding: "10px 25px",
                  fontSize: "14px",
                }}
              >
                Subscribe
              </Button>
            </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item
            className={styles.itemLinks}
            style={{ backgroundColor: "#F4F4F4" }}
          >
            <h5
              style={{
                color: "#33A4D8",
                fontSize: "24px",
                fontWeight: "400",
                margin: "20px",
              }}
            >
              Quick Links
            </h5>

            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Duis bibendum
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Purus non dignissim
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Sapien metus gravida
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Eget consequat
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Praesent eu pulvinar
            </a>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item
            style={{ backgroundColor: "#F4F4F4" }}
            className={styles.itemGridRightSide}
          >
            <h5
              style={{
                color: "#33A4D8",
                fontSize: "24px",
                fontWeight: "400",
                margin: "20px",
              }}
            >
              Our Pages
            </h5>

            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Our Videos
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              License Terms
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              About Us
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Contact
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "20px", lineHeight: "2" }}
            >
              Privacy Policies
            </a>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
