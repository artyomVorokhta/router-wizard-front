import { createSx } from 'themes';

const sx = createSx({
  layout: {
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    padding: {
      md: '25px 50px',
      sm: '20px 40px',
      xs: '15px 30px ',
    },
  },
});

export default sx;
