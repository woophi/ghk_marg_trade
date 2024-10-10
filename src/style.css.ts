import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  overflow: 'hidden',
  backgroundColor: '#fff',
});
const containerBottom = style([
  container,
  {
    backgroundColor: '#F3F4F5',
    borderRadius: '2rem',
  },
]);

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '24px',
  borderRadius: '24px',
  backgroundColor: '#FCF3E5',
  marginTop: '-6px',
});

const slide = style({
  backgroundColor: '#fff',
  padding: '1rem',
  width: '200px',
  height: '160px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  borderRadius: '20px',
});

const slideRow = style({
  display: 'flex',
  justifyContent: 'space-between',
});

const boxRow = style({
  border: '2px solid #F3F4F5',
  padding: '1rem',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
});
const articleRow = style({
  padding: '12px',
  gap: '1rem',
  borderRadius: '24px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F3F4F5',
});

const containerBS = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const boxExpanded = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    borderRadius: '20px',
  },
  variants: {
    expanded: {
      true: {
        backgroundColor: '#F3F4F5',
      },
    },
    tariffs: {
      true: {
        backgroundColor: '#F3F4F5',
        padding: '1rem',
      },
    },
  },
});
const weRow = style({
  padding: '1rem',
  gap: '1rem',
  borderRadius: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const bottomRow = style([
  articleRow,
  {
    padding: 0,
  },
]);

export const appSt = {
  bottomBtn,
  container,
  box,
  slide,
  slideRow,
  boxRow,
  articleRow,
  containerBS,
  boxExpanded,
  weRow,
  containerBottom,
  bottomRow,
};
