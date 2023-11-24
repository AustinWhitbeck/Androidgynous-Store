import { Stack, Typography } from "@mui/material"

const ShirtDetailsPage = ({ params }: { params: { id: string} }) => {
  const { id } = params;
  return (
    <Stack>
        <Typography variant="h1">Product Page: ID ({id})</Typography>
        <Typography variant="body1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et commodi rem porro sed id natus ullam quod repellat eaque, officiis nesciunt ipsum possimus officia repudiandae accusamus consequatur maxime deleniti.</Typography>
    </Stack>
  )
}

export default ShirtDetailsPage