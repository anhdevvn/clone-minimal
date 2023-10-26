import { Link } from "@mui/material";
import { Box } from "@mui/material";

export default function HomeView() {
  return (
    <>
      <p>Home view</p>
      <Box>
        ---------
      </Box>
      <Box>
        <Link  href="./about-us" target="_blank">
          Go to about us
        </Link>
      </Box>    
      <Box>
        <Link  href="./do-tasks" target="_blank">
          Go to tasks
        </Link>
      </Box>   
    </>
  )
}
