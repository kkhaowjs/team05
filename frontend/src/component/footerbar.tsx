import React, { CSSProperties } from 'react'

const Footerbar = () => {
  const footerStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: '200px',
    backgroundColor: '#f5f5f5',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    color:'000',
    
  };
  return (
    <>
    <div style={footerStyle}>
        <div>
          
        </div>
    </div>
    </>
  )
}

export default Footerbar