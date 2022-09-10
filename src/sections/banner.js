/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import MainBannerDErzum from "assets/MainBannerDErzum.svg";
import { FaAndroid, FaApple } from "react-icons/fa";
import { ExternalLink } from "components/link";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Introducing Carpooling in Pakistan!
          </Heading>
          <Text as="p" variant="heroSecondary">
            As a driver, you can get your car registered and pick a passenger or
            two on the way to your destination to cut the traveling cost. As a
            passenger, you can find the perfect ride from a wide range of
            destinations at the lowest fares. The Convenient and trusted service
            is just a click away to get active on your android or iOS device.
          </Text>

          {/* <Button variant='primary'>
            Explore
          </Button> */}
          <Button variant="primary" sx={{ margin: 2 }}>
            <ExternalLink
              sx={{
                mr: 2,
                color: "#FFFFFF",
                display: "inline-block",
                textAlign: "center",
                ":hover": {
                  color: "#FFFFFF",
                },
              }}
              path="https://play.google.com/store/apps/details?id=com.derzam"
              target="_blank"
            >
              Get it for Android <FaAndroid size={19} />
            </ExternalLink>
          </Button>

          {/* <Button variant="primary" sx={{ margin: 2 }}>
            <Text sx={{ mr: 2, display: "inline-block", textAlign: "center" }}>
              Get it for iOS{" "}
            </Text>{" "}
            <FaApple size={19} />
          </Button> */}
        </Box>
        {/* <Box sx={styles.banner.imageBox}>
          <Image src={MainBannerDErzum} alt="DerzamBanner" />

        </Box> */}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["40px", "45px", "155px", "170px", null, null, "180px", "60px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
