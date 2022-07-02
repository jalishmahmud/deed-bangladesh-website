/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Amazon',
    title: 'Amazon Business',
    text:
      'We offer you a number of special services to make your Amazon business smooth to smoother.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Web',
    title: 'Web Development',
    text:
      'We can help you with CRM integrated websites, as well as eCommerce sites if necessary. ',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Graphic',
    title: 'Graphic Design',
    text:
      'All kind of design support we provide. Are looking for an spectacular design! we are here.',
  },
  {
    id: 4,
    imgSrc: Speed,
    altText: 'Social',
    title: 'Social Media Services',
    text:
      'We provides all kinds of social media marketing services for small businesses and enterprises. ',
  },
  {
    id: 5,
    imgSrc: Speed,
    altText: 'China',
    title: 'China Sourcing',
    text:
      'It sounds very easy to find Chinese suppliers, such as sourcing on trading platforms like Alibaba',
  },
  {
    id: 6,
    imgSrc: Speed,
    altText: 'E-Commerce',
    title: 'Graphic Design',
    text:
      'If you are new and just thinking or planning to start eCommerce business with us, let us know.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="services">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Find our exciting services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
