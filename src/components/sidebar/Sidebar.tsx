import { List, ListItemButton, ListItemText } from '@mui/material';

import { Box } from 'components/ui/box/Box';
import { Typography } from 'components/ui/typography/Typography';

import { Option } from 'types/common/option';

import sx from './Sidebar.styles';

type Props = {
  options: Option[];
  selected: Option['value'];
  onOptionClick: (value: Option['value']) => void;
};

export function Sidebar({ options, onOptionClick, selected }: Props) {
  return (
    <Box sx={sx.wrapper}>
      <Typography sx={sx.title} variant='h4'>
        Router Wizard
      </Typography>

      <List sx={sx.list}>
        {options.map(({ label, value }) => (
          <ListItemButton
            key={value}
            selected={value === selected}
            onClick={() => onOptionClick(value)}
            sx={{ ...sx.listItem, ...(value === selected && sx.selected) }}
          >
            <ListItemText sx={{ ...sx.listItemText }}>{label}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
