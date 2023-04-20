import { Box } from 'components/ui/box/Box';
import { Typography } from 'components/ui/typography/Typography';

import sx from './Info.styles';

export function AuthInfo() {
  return (
    <Box sx={sx.wrapper}>
      <Typography variant='h2' sx={sx.title}>
        Router
        <br />
        Wizard
      </Typography>
    </Box>
  );
}
