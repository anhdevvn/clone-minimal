import { forwardRef } from 'react';
import { NavItemDesktopProps, NavItemProps } from '../types';
import Iconify from 'src/components/iconify';
import { ListItem } from './styles';
import { Box, CardActionArea, Link, LinkProps } from '@mui/material';
import { RouterLink } from 'src/routes/components';
import { motion } from 'framer-motion';

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
({ item, open, offsetTop, active, subItem, externalLink, ...other }, ref) => {
  const {title, path, children} = item;

  const renderContent = (
    <ListItem 
      ref={ref}
      disableRipple
      offsetTop={offsetTop}
      subItem={subItem}
      active={active}
      open={open}
      {...other}
    >
      {title}
      {!!children && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}

    </ListItem>
  );

  // External link
  if (externalLink) {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        {renderContent}
      </Link>
    );
  }

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link component={RouterLink} href={path} underline="none">
      {renderContent}
    </Link>
  );

  }
);


interface NavItemDashboardProps extends LinkProps {
  item: NavItemProps;
}

export function NavItemDashboard({item, sx, ...other} : NavItemDashboardProps) {
  return (
    <Link component={RouterLink} href={item.path} sx={{ width: 1, height: 1 }} {...other}>
      <CardActionArea
        sx={{
          height: 1,
          minHeight: 320,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',
          px: { md: 3, lg: 10 },
          ...sx,
        }}
      >
        <motion.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </motion.div>
      </CardActionArea>
    </Link>
  );
}
