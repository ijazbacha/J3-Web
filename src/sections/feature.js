/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'One-click installation and easy registration',
    title: 'One-click installation and easy registration',
    text:
      'The viable app occupies low storage space and set ups in minutes for both the android and iOS users.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Find or Offer a Ride.',
    title: 'Find or Offer a Ride.',
    text:
      'Post a ride so any passenger feeling the urge to travel on the same route can find it.The passenger can search and scroll through different riders enroute to the same destination.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Select a pick-up and drop off spots.',
    title: 'Select a pick-up and drop off spots.',
    text:
      'To avoid any inconvenience, both the driver and the passenger are requested to understand each other terms over a voice call or instant messaging.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Just like that!',
    title: 'Just like that!',
    text:
      'You have a travelling partner now to pick or be picked by.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Using Derzam"
          title="Is as easy as you like!"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
