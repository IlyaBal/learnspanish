import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" to="/">
        Learn Spanish
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
