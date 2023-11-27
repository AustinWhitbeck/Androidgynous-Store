'use client';
import { useEffect, useState } from 'react';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TopNavigation = () => {
  // Hooks
  const url = usePathname();

  // States
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const routes = [
    { name: 'Shirts', path: '/shirts'}
  ];
  useEffect(() => {
    setDrawerOpen(false);
  }, [url])
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px', width: '100%', padding: '10px', backgroundColor: 'gray'}}>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Link href="/" style={{ textDecoration: 'none'}}>
          <Typography> Androidgynous</Typography>
        </Link>
        <Link href="/cart" passHref>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Box>
      <Drawer variant="temporary" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: '200px'}}}>
        {routes.map((route, index) => {
            return(
              <Link href={route.path} passHref key={`${route.name}-${index}`}>
                <Button>{route.name}</Button>
              </Link>
            )
          })
        }
      </Drawer>
      </>
  )
}

export default TopNavigation;