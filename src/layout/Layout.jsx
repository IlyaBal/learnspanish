import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../components/common/Link';
import { signOutUser } from '../utils/firebaseHelpers';
import { useAuth } from '../provider/useAuth';
import { Outlet, useNavigate } from 'react-router-dom';
// import { signOutUser } from 'firebase/auth';
export default function Layout() {
  const { setToken, getToken } = useAuth();
  const navigate = useNavigate();
  // if (!token) return null;
  const user = getToken();
  console.log('🚀 ~ file: Dashboard.jsx:16 ~ Dashboard ~ token:', user.uid);

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
          <Typography variant="h5" color="darkcyan" noWrap sx={{ flexGrow: 1 }}>
            <Link color="text.primary" href="/lessons" sx={{ my: 1, mx: 1.5 }}>
              Learn Spanish!
            </Link>
          </Typography>
          <Typography
            variant="h6"
            color="darkgreen"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Welcome {user?.email}!
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/lessons"
              sx={{ my: 1, mx: 1.5 }}
            >
              Lessons!
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
      <main className="dashboard">
        <Outlet />
      </main>
    </>
  );
}
