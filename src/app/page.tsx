import {  Stack, Typography } from "@mui/material"
import MainIcon from "../images/icon_version_3.png";
import Image from "next/image";

const HomePage = async () => {
  return (
    <Stack sx={{ alignItems: 'center'}}>
      <Typography variant="h1" sx={{ color: 'navy'}}>Androidgynous</Typography>
      <Typography variant="subtitle2" component="h2" sx={{ color: 'pink'}}>The future is not defined by the binary</Typography>
      <Image src={MainIcon} alt="Androidgynous Logo" width={500} height={500} style={{ borderRadius: '50%', border: '2px solid purple'}}/>
    </Stack>
  )
}

export default HomePage