import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Logo from 'src/components/logo/logo';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';

import { paths } from 'src/routes/paths';
import { useTheme } from '@mui/material/styles';
import { useResponsive } from 'src/hooks/use-responsive';
import {LoginButton, SettingsButton} from '../_common';
import { HEADER } from '../config-layout';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { bgBlur } from 'src/themes/css';
import { Link } from '@mui/material';
import Label from 'src/components/label';

export default function Header() {
  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  
  return (
    <AppBar>
      <Toolbar
        sx={
          {
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_DESKTOP,
            },
            transition: theme.transitions.create(['height'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(offsetTop && {
              ...bgBlur({
                color: theme.palette.background.default,
              }),
              height: {
                md: HEADER.H_DESKTOP_OFFSET,
              },
            }),
          }
        }
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
            badgeContent={
              <Link target="_blank" rel="noopener" underline="none" href={paths.changelog}>
                <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
                  v5.5.0
                </Label>
              </Link>
            }
          >
            <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={false} data={navConfig} />}


          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button variant="contained" target="_blank" rel="noopener" href={paths.minimalUI}>
              Purchase Now
            </Button>

            {mdUp && <LoginButton />}

            <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            />

            {/* {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />} */}
          </Stack>

          {/*  */}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
