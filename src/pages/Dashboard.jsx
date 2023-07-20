import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../components/common/Link';
import { signOutUser } from '../utils/firebaseHelpers';
import { useAuth } from '../provider/authProvider';
import { useNavigate } from 'react-router-dom';
// import { signOutUser } from 'firebase/auth';
export default function Dashboard() {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  // if (!token) return null;
  console.log('🚀 ~ file: Dashboard.jsx:16 ~ Dashboard ~ token:', token);

  const handleLogout = () => {
    setToken();
    navigate('/', { replace: true });
  };

  const onSignOutButtonClick = () => {
    signOutUser();
    setTimeout(() => {
      handleLogout();
    }, 1 * 100);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Learn Spanish! {token.providerData?.email}
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/lessons"
              sx={{ my: 1, mx: 1.5 }}
            >
              Lessons
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/tests"
              sx={{ my: 1, mx: 1.5 }}
            >
              Tests
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/scores"
              sx={{ my: 1, mx: 1.5 }}
            >
              Scores
            </Link>
          </nav>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={onSignOutButtonClick}
          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
