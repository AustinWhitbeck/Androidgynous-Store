import { Box } from "@mui/material"

const GeneralContainer = ({ children }: { children: React.ReactNode}) => {
  return (
    <Box sx={{ padding: '10px', border: '2px solid gray', borderRadius: '5px'}}>
        {children}
    </Box>
  )
}

export default GeneralContainer