import { Link } from "@mui/material";
import { Box } from "@mui/material";
import { useScroll } from "framer-motion";
import ScrollProgress from "src/components/scroll-progress";

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
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
