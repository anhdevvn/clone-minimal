import Box from "@mui/material/Box";
import Header from "./header";
import Footer from "./footer";
import { usePathname } from "src/hooks/use-pathname";

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  return(
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {/* Header */}
      <Header />

      {/* Content start */}
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...({
            pt: {xs: 8, md: 10}
          })
          
        }}
      >
        {children}
      </Box>

      {/* Content End */}

      {/* Footer */}
      <Footer />

    </Box>
  )
}
