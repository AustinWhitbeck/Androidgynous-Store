'use client';
import { useEffect, useState } from 'react';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TopNavigation = () => {
  // Hooks
  const url = usePathname();

  // States
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
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
          <Box sx={{ borderRadius: '50%', backgroundColor: 'white', height: '20px', width: '20px'}}/>
        </Link>
      </Box>
      <Drawer variant="temporary" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: '200px'}}}>
        <Link href="/shirts" passHref>
          <Button onClick={() => console.log('navigate to new route')}>Shirts</Button>
        </Link>
      </Drawer>
      </>
  )
}

export default TopNavigation;