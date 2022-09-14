/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';
import Screen1 from '../assets/RegistrationProcess/screen1.jpg';
import Screen2 from '../assets/RegistrationProcess/screen2.jpg';
import Screen3 from '../assets/RegistrationProcess/screen3.jpg';
import Screen4 from '../assets/RegistrationProcess/screen4.jpg';
import Screen5 from '../assets/RegistrationProcess/screen5.jpg';
import Screen6 from '../assets/RegistrationProcess/screen6.jpg';
import Screen7 from '../assets/RegistrationProcess/screen7.jpg';
import Screen8 from '../assets/RegistrationProcess/screen8.jpg';

const data = [
  {
    id: 1,
    title: 'One-click installation and easy registration',
    text:
      'The viable app occupies low storage space and set ups in minutes for both the android and iOS users.',
    InitialProcess: Screen1,
    DriverProcess: Screen5,
  },
  {
    id: 2,
    title: 'Find or Offer a Ride ',
    text:
      'Post a ride so any passenger feeling the urge to travel on the same route can find it. The passenger can search and scroll through different riders enroute to the same destination.      ',
      InitialProcess: Screen2,
    DriverProcess: Screen6,
    },
  {
    id: 3,
    title: 'Select a pick-up and drop off spots ',
    text:
      'To avoid any inconvenience, both the driver and the passenger are requested to understand each other terms over a voice call or instant messaging.',
      InitialProcess: Screen3,
    DriverProcess: Screen7,
    },
  {
    id: 4,
    title: 'Just like that!',
    text:
      'You have a travelling partner now to pick or be picked by.',
      InitialProcess: Screen4,
    DriverProcess: Screen8,
    },
];

const data2 = [
  {
    id: 5,
    title: 'One-click installation and easy registration',
    text:
      'The viable app occupies low storage space and set ups in minutes for both the android and iOS users.',
    InitialProcess: Screen1,
    DriverProcess: Screen5,
  },
  {
    id: 6,
    title: 'Find or Offer a Ride ',
    text:
      'Post a ride so any passenger feeling the urge to travel on the same route can find it. The passenger can search and scroll through different riders enroute to the same destination.      ',
      InitialProcess: Screen2,
    DriverProcess: Screen6,
    },
  {
    id: 7,
    title: 'Select a pick-up and drop off spots ',
    text:
      'To avoid any inconvenience, both the driver and the passenger are requested to understand each other terms over a voice call or instant messaging.',
      InitialProcess: Screen3,
    DriverProcess: Screen7,
    },
  {
    id: 8,
    title: 'Just like that!',
    text:
      'You have a travelling partner now to pick or be picked by.',
      InitialProcess: Screen4,
    DriverProcess: Screen8,
    },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow} id='function'>
      <Container>
        <SectionHeader
          slogan="Using Derzam is as easy as you like"
          title="HOW IT WORKS"
          isWhite={true}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`o${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        <SectionHeader
          
        />
        <Grid sx={styles.grid}>
          {data2.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`o${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
