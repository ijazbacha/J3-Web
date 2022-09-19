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
    title: 'Pre-filtration',
    text:
      'Prefiltration involves the use of a filter designed to remove particulate matter (dirt, sediment, etc.) from water prior to further treatment.',
    InitialProcess: Screen1,
    DriverProcess: Screen5,
  },
  {
    id: 2,
    title: 'Charcoal Filter',
    text:
      'Activated charcoal is the ideal water filter because it removes toxins from the water without stripping the water of salts and important minerals.',
      InitialProcess: Screen2,
    DriverProcess: Screen6,
    },
  {
    id: 3,
    title: '5 Polishing Filter',
    text:
      'A Polishing Filter (or also known as percolation area) purpose is to partially treat and dispose of the effluent from the wastewater system or septic tank.',
      InitialProcess: Screen3,
    DriverProcess: Screen7,
    },
  {
    id: 4,
    title: 'Reverse Osmosis',
    text:
      'Reverse osmosis is a water purification process that uses a semi-permeable membrane (synthetic lining) to filter out unwanted molecules and large particles.',
      InitialProcess: Screen4,
    DriverProcess: Screen8,
    },
];

const data2 = [
  {
    id: 5,
    title: 'Ozonation',
    text:
      'Ozonation (also referred to as ozonisation) is a chemical water treatment technique based on the infusion of ozone into water.',
    InitialProcess: Screen1,
    DriverProcess: Screen5,
  },
  {
    id: 6,
    title: 'UV Light',
    text:
      'Ultra Violet (UV) light disinfection is one water treatment system that can be used to remove most forms of microbiological contamination from water.',
      InitialProcess: Screen2,
    DriverProcess: Screen6,
    },
  {
    id: 7,
    title: '1H Polishing Filter',
    text:
      'The Water Polisher is an advanced stormwater treatment system utilizing an up flow media filter with built-in pretreatment.',
      InitialProcess: Screen3,
    DriverProcess: Screen7,
    },
  {
    id: 8,
    title: 'Just like that!',
    text:
      'We produce Marwa pure water.',
      InitialProcess: Screen4,
    DriverProcess: Screen8,
    },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow} id='function'>
      <Container>
        <SectionHeader
          slogan="Marwa as a pure & natural water as you like"
          title="HOW IT FILTER"
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
