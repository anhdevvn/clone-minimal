import Iconify from "src/components/iconify"

type Props = {
  active: Boolean,
  icon: string,
  text: string

}

export const TabDiv = ({active, icon, text}: Props) => {
  const borderBottom = active ? '2px #212B36 solid' : 'none';
  return (
    <div 
    style={{
      borderBottom: borderBottom, 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: 8, 
      display: 'inline-flex'}}>
      <div style={{
        width: 24, 
        height: 24, 
        paddingLeft: 2, 
        paddingRight: 2, 
        paddingTop: 4, 
        paddingBottom: 4, 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex'
        }}>
        <Iconify icon={icon} width={24} />
      </div>
      <div>
        <span 
          style={{
            color: '#212B36', 
            fontSize: 14, 
            fontFamily: 'Public Sans', 
            fontWeight: '600',
            wordWrap: 'break-word'
            }}>
          {text}
        </span>
      </div>
  </div>
  )
}
