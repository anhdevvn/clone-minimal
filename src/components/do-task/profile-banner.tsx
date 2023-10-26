


import { Box, Container } from "@mui/system"
import Iconify from "../iconify";
import { Button } from "@mui/base";
import {CoverImageDiv, StackDiv, TabDiv} from "./my_components";
import { useResponsive } from "src/hooks/use-responsive";



const ProfileBanner = () => {
  const mdUp = useResponsive('up', 'md');

  if(mdUp) {
    return(
      <div style={{
        width: 1080, 
        height: 288, 
        position: 'relative', 
        background: '#333',  
        borderRadius: 16, 
        overflow: 'hidden'
        }}
        >
        {/* Cover Image background */}
        <CoverImageDiv></CoverImageDiv>
  
        {/* Tabs sections */}
        <div
        style={{
          width: "100%",
          height: 48,
          background: "#ddd",
          display: 'inline-flex',
          justifyContent: 'flex-end',
          alignItems: 'center', 
          gap: 40,
          paddingLeft: 24, 
          paddingRight: 24,
        }}
        >
          <TabDiv
            active={true}
            icon="solar:user-id-bold"
            text="Profile"
          ></TabDiv>
          <TabDiv
            active={false}
            icon="solar:users-group-rounded-bold"
            text="Followers"
          ></TabDiv>
          <TabDiv
            active={false}
            icon="solar:heart-bold"
            text="Friends"
          ></TabDiv>
          <TabDiv
            active={false}
            icon="solar:gallery-wide-bold"
            text="Friends"
          ></TabDiv>
          
        </div>
  
        {/* Stack sections */}
        <StackDiv isMobile={!mdUp}></StackDiv>
          
  
  
      </div>
    )
  }
  
  return (
    <div style={{
      width: 343, 
      height: 288, 
      position: 'relative', 
      background: '#333',  
      borderRadius: 16, 
      overflow: 'hidden'
      }}
      >
      {/* Cover Image background */}
      <CoverImageDiv></CoverImageDiv>

      {/* Tabs sections */}
      <div
      style={{
        width: "100%",
        height: 48,
        background: "#ddd",
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center', 
        gap: 40,
        paddingLeft: 24, 
        paddingRight: 24,
      }}
      >
        <TabDiv
          active={true}
          icon="solar:user-id-bold"
          text="Profile"
        ></TabDiv>
        <TabDiv
          active={false}
          icon="solar:users-group-rounded-bold"
          text="Followers"
        ></TabDiv>
        <TabDiv
          active={false}
          icon="eva:arrow-ios-forward-fill"
          text=""
        ></TabDiv>
        
      </div>

      {/* Stack sections */}
      <StackDiv isMobile={!mdUp}></StackDiv>
        


    </div>
  )

}

export default ProfileBanner;


