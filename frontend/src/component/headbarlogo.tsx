import React, { CSSProperties } from 'react'

const headbarlogo = () => {
    const headerStyle:CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        height: '36px',
        backgroundColor: '#003d29',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        color:'white',
        alignItems: 'center',
      };
  return (<>
    <div style={headerStyle}>
      <div style={{ textAlign: 'left', flex: 1 }}>
        <div style={{marginLeft:'20px'}}>
            <span>+0123456789</span>
        </div>
      </div>
      <div style={{ textAlign: 'center', flex: 1 }}>
        <span>Get 50% Off on Selected Items</span>
        <span style={{ margin: '0 10px' }}>|</span>
        <span>Shop now!</span>
      </div>
      <div style={{ textAlign: 'right', flex: 1 }}>
        <div style={{marginRight:'20px'}}>
        <span>B64XXXXX@g.sut.ac.th</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default headbarlogo