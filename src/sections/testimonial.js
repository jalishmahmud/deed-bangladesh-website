/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';

const data = [
  {
    id: 1,
    title: '',
    description:
      'I have not been used to giving reviews most of the time. I always try to ignore it because of my laziness. I would think that I spend money to get the service, that’s all. But Deed Bangladesh has made me compelled to write this review. They didn’t request me to write this. Rather their service has been so fantastic that I had nothing but to write this out, breaking my conventional laziness. I strongly recommend them. But I want to request them to beg my pardon in advance as I will not always give reviews after receiving this kind of extraordinary. Because I want to remain lazy, and I enjoy remaining so. But I can wish them success.',
    avatar: Avatar1,
    name: 'Isabellla Fernandez',
    designation: 'CEO & Founder',
    review: 4,
  },
  {
    id: 2,
    title: '',
    description:
      "It's been a long time since I started working with the Deed Bangladesh team. When I decided to work with them, I didn’t know about them properly. At that time, they were a bit new in the marketplace. Actually, I had no option at that moment. I had to rely on them finding no other way. But they evaluated my faith. I got each and every job from them with 100% satisfaction. The most important thing to mention is that they never show boring feelings in case of corrections. The more I wanted to change something, the more they edited the content with great care and seriousness. If someone asks me to give them marks, I will keep 10 marks in my hand so that they feel like they are upgrading themselves as a continuous process. So, you all can understand that they will give 90% marks from my side.",
    avatar: Avatar2,
    name: 'Shamail Tahir',
    designation: 'CEO & Founder',
    review: 5,
  },
  {
    id: 3,
    title: '',
    description:
      'Don’t go through a dictionary to find the meaning of Professionalism. Just work with Deed Bangladesh you will find the elaborate meaning with a lot of explanations. When they work, they forget the agreement of payment. Most of the time I willingly paid them more bucks than commitment. Actually, I used to do those to my satisfaction. I just think of myself to be a very fortunate client of Deed Bangladesh. They should be strongly recommended by all of their clients, not only me. Just keep it up, no one will be able to stop you, guys.',
    avatar: Avatar3,
    name: 'Roman Cresto',
    designation: 'CEO & Founder',
    review: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Dear Deed Bangladesh, just have a few words for you. You people are unstoppable. I have been taking service from a number of agencies. But among them, you guys are just awesome. Love your skilled and professional services.',
    avatar: Avatar4,
    name: 'Bernlceond',
    designation: 'CEO & Founder',
    review: 4,
  },
  {
    id: 5,
    title: '',
    description:
      'Whenever someone goes to take services from a professional agency, one of the most important parameters to judge the agency is timing. In this regard, I am so happy that I have almost no words to praise them with full satisfaction. Whatever I say about Deed Bangladesh, it will be very little more than the actual image. Understand yourself and test them by working with them. Believe me, you will not be disappointed.',
    avatar: Avatar4,
    name: 'Ivan Rincon',
    designation: 'CEO & Founder',
    review: 4,
  },
  {
    id: 6,
    title: '',
    description:
      'I am totally disappointed in my failure to find out the most suitable word to praise Deed Bangladesh Agency for the extraordinary services they have been providing since I started working with them 6years ago. I am totally frustrated thinking that they will be unhappy with my little words compared with their super professional performance with my seller central account. So, I will not try to say anymore but recommend them to every Amazon Seller Central Account holder. If you want to add some hours to your sleeping time, borrow your all burden and work pressure on Deed Bangladesh. They have the capacity to bear all the responsibility with a smiling face. Let’s try and win.',
    avatar: Avatar4,
    name: 'Eric J Walsh',
    designation: 'CEO & Founder',
    review: 4,
  },
  {
    id: 7,
    title: '',
    description:
      'What Deed Bangladesh did to my business has been truly amazing. Their team focuses on prioritizing communication over results. Not to say the results aren’t there! I came to be great friends with them as they help me with my everyday business. Truly love their team.',
    avatar: Avatar4,
    name: 'Stefano Sciuto',
    designation: 'CEO & Founder',
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container>
        <SectionHeader slogan="Testimonial" title="Meet Client Satisfaction" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-35px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'yellow',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: '#25A0FF',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
