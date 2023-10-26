const CoverImageDiv = () => {
  return (
    <div>
        <img style={{
          width: 1080, 
          height: 240
        }}  
          src="./public/images/Img_Cover_L.jpg" 
          alt="The cover image" 
          />
        <div style={{
          width: 1080, 
          height: 240, 
          position: "absolute", 
          top: 0, 
          left: 0, 
          background: "#004B50", 
          opacity: 0.8, 
          zIndex: 2, 
          }}>
        </div>
      </div>
  )
}

export default CoverImageDiv;

