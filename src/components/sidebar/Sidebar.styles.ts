import { color, createSx } from 'themes';

export const sx = createSx({
  wrapper: {
    height: '100%',
    width: '100%',
    padding: '30px',

    gap: '30px',

    color: color.white,
    background: color.primary,
  },
  title: {
    color: color.black,
    fontWeight: 'bold',
    padding: '8px 16px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  listItem: {
    borderRadius: '4px',
  },
  listItemText: {
    fontWeight: 'bold',
  },
  selected: {
    bgcolor: 'rgba(255, 255, 255, 0.1) !important',
    transition: 'all 0.5s',
  },
});

export default sx;
