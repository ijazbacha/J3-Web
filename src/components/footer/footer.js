/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { ExternalLink } from "components/link";
// import { Link } from "react-scroll";
import * as Scroll from 'react-scroll'
import data from "./footer.data";
import FooterLogo from "assets/derzamlogo.png";
import DLogo from "../../assets/dLogo.svg";
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const social = [
  {
    path: "https://www.facebook.com/Derzam-105329162004411",
    icon: <FaFacebookF />,
  },
  {
    path: "https://twitter.com/Derzam_",
    icon: <FaTwitter />,
  },
  {
    path: "https://www.instagram.com/derzam_/",
    icon: <FaInstagram />,
  },
  {
    path: "https://www.linkedin.com/in/der-zam-016652228/",
    icon: <FaLinkedin />,
  },
];
export default function Footer() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/privacypolicy")
  }

  return (
    <footer>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <ExternalLink path="/">
            <Image src={DLogo} alt="logo" />
          </ExternalLink>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item) => (
                <Box>
                  {item.id == 5 ? (
                    // <ExternalLink
                    //   path="/privacypolicy"
                    //   key={item.id}
                    //   label={item.label}
                      
                    //   sx={styles.footer.link}
                    // />
                    <Link href="/privacypolicy" >
                      <a sx={styles.footer.link}>Privacy Policy</a>
                    </Link>
                  ) : (
                    <Scroll.Link
                      path={item.path}
                      // key={item.id}
                      // label={item.label}
                      to={item.path}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      sx={styles.footer.link}
                    >
                      {item.label}
                    </Scroll.Link>
                  )}
                </Box>
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()}
            <ExternalLink sx={styles.footer.link} path='https://ataritechnologies.com/'>
              Atari Technologies
            </ExternalLink>
          </Text>
          <Box style={styles.social}>
            {social.map((socialItems, i) => (
              <Box as="span" key={i} sx={styles.social.icon}>
                <ExternalLink
                  sx={styles.social.icon}
                  path={socialItems.path}
                  target="_blank"
                >
                  {socialItems.icon}
                </ExternalLink>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
  social: {
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      //   display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 24,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "primary",
      },
    },
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};
