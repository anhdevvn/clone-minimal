
type Props = {
  isMobile: Boolean,
}

const StackDiv = ({isMobile}: Props) => {
  if (!isMobile) {
    return (
      <div 
      style={{
        width: 343, 
        height: 152, 
        paddingBottom: 24, 
        paddingLeft: 24, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 24, 
        display: 'inline-flex',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 3,
        }}>
  
      <div 
        style={{
          width: 128, 
          height: 128, 
          borderRadius: '50%', 
          border: '2px white solid', 
          justifyContent: 'center', 
          alignItems: 'center', 
          display: 'flex',
          }}
      >
        <div 
          style={{
            flex: '1 1 0', 
            alignSelf: 'stretch', 
            borderRadius: 500, 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex'}}>
            <img 
              style={{
                flex: '1 1 0', 
                alignSelf: 'stretch', 
                borderRadius: 500}} 
                src="./public/images/Img_Avatar.25.png" />
        </div>
      </div>
  
      <div 
        style={{
          paddingTop: 24, 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          gap: 4, 
          display: 'inline-flex'}}>
          <div 
            style={{
              color: 'white', 
              fontSize: 24, 
              fontFamily: 'Public Sans', 
              fontWeight: '700', 
              wordWrap: 'break-word'}}>
                <span>
                  Mireya Conner 
                </span>
            </div>
          <div 
            style={{
              opacity: 0.48, 
              color: 'white', 
              fontSize: 14, 
              fontFamily: 'Public Sans', 
              fontWeight: '400', 
              wordWrap: 'break-word'
              }}>
                <span>
                  Event Coordinator
                </span>
          </div>
      </div>
    </div>
    )
  }

  return (
    <div 
    style={{
      width: 139, 
      height: 240, 
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      margin: '0 auto',
      zIndex: 3,
      }}>

    <div 
      style={{
        borderRadius: 500, 
        border: '2px white solid', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'inline-flex',
        }}
    >
      <div 
        style={{
          width: 64, 
          height: 64, 
          borderRadius: 500, 
          justifyContent: 'center', 
          alignItems: 'center', 
          display: 'flex'
          }}>
          <img 
            style={{
              flex: '1 1 0', 
              alignSelf: 'stretch', 
              borderRadius: 500}} 
              src="./public/images/Img_Avatar.25.png" />
      </div>
    </div>

    <div 
      style={{
        paddingTop: 24, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap: 4, 
        display: 'inline-flex'}}>
        <div 
          style={{
            color: 'white', 
            fontSize: 20, 
            fontFamily: 'Public Sans', 
            fontWeight: '700', 
            wordWrap: 'break-word'}}>
              <span>
                Mireya Conner 
              </span>
          </div>
        <div 
          style={{
            opacity: 0.48, 
            color: 'white', 
            fontSize: 14, 
            fontFamily: 'Public Sans', 
            fontWeight: '400', 
            wordWrap: 'break-word'
            }}>
              <span>
                Event Coordinator
              </span>
        </div>
    </div>
  </div>
  )
}

export default StackDiv;





