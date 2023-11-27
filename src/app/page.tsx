import { Stack, Typography } from "@mui/material"
import MainIcon from "../images/icon_version_1.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <Stack>
      <Typography variant="h1">Androidgynous</Typography>
      <Typography variant="h3" component="h2">The future is not defined by the binary</Typography>
      <Image src={MainIcon} alt="Androidgynous Logo" width={500} height={400} />
    </Stack>
  )
}

export default HomePage