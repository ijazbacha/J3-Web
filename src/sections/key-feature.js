/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import { FaFlask, FaCheckCircle, FaTint, FaRecycle } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaTint size={80} color={'#14b5a3'} />,
    altText: 'Maxium Purity',
    title: 'Maxium Purity',
    text:
      'An easy, fast, convenient and smart way to get around with others going your way.',
  },
  {
    id: 2,
    // imgSrc: SmartSmart,
    icon: <FaRecycle size={80} color={'#14b5a3'} />,
    altText: '7 Steps Filtration',
    title: '7 Steps Filtration',
    text:
      'Count on our trustworthy members to get you where you need to go safely.',
  },
  {
    id: 3,
    // imgSrc: VacantRide,
    icon: <FaFlask size={80} color={'#14b5a3'} />,
    altText: 'Cholorine Free',
    title: 'Cholorine Free',
    text:
      'Get a paying partner while you are driving your car on a long journey.',
  },
  {
    id: 4,
    // imgSrc: CustomerSupport,
    icon: <FaCheckCircle size={80} color={'#14b5a3'} />,
    altText: 'Quality Certified',
    title: 'Quality Certified',
    text:
      'Get help with our customer support 24/7.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='feature'>
      <Container>
        <SectionHeader
          slogan="Water is life. Treat it right"
          title='A Trusted Name In
          Bottled Water Industry'
        />
        <Grid sx={styles.grid}>
          {data.map((e) => (
            <FeatureCardColumn
              key={e.id}
              ICON={e.icon}
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
