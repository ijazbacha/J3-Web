/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import AffordableRide from 'assets/key-feature/AffordableRide.svg';
import CustomerSupport from 'assets/key-feature/CustomerSupport.svg';
import SmartSmart from 'assets/key-feature/SmartSmart.svg';
import VacantRide from 'assets/key-feature/VacantRide.svg';

const data = [
  {
    id: 1,
    imgSrc: AffordableRide,
    altText: 'MOST AFFORDABLE RIDE',
    title: 'MOST AFFORDABLE RIDE',
    text:
      'An easy, fast, convenient and smart way to get around with others going your way.',
  },
  {
    id: 2,
    imgSrc: SmartSmart,
    altText: 'SAFE AND SMART',
    title: 'SAFE AND SMART',
    text:
      'Count on our trustworthy members to get you where you need to go safely.',
  },
  {
    id: 3,
    imgSrc: VacantRide,
    altText: 'CASH THE VACANT SEAT',
    title: 'CASH THE VACANT SEAT',
    text:
      'Get a paying partner while you are driving your car on a long journey.',
  },
  {
    id: 4,
    imgSrc: CustomerSupport,
    altText: 'Customer Support',
    title: 'CUSTOMER SUPPORT',
    text:
      'Get help with our customer support 24/7.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='feature'>
      <Container>
        <SectionHeader
          slogan="Re-Shaping the way you ride"
          title='Offer or Book a safe ride with Derzam'
        />
        <Grid sx={styles.grid}>
          {data.map((e) => (
            <FeatureCardColumn
              key={e.id}
              src={e.imgSrc}
              alt={e.altText}
              title={e.title}
              text={e.text}
            />
          ))}
        </Grid>
      </Container>

    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
