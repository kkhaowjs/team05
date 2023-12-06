import React, { CSSProperties } from 'react';

const HeadbarLogo = () => {
  const headerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: '36px',
    backgroundColor: '#003d29',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const sectionStyle: React.CSSProperties = {
    margin: '0 20px',
  };
  const firstSectionStyle: React.CSSProperties = {
    flex: '0 0 150px',
    ...sectionStyle,
  };

  const thirdSectionStyle: React.CSSProperties = {
    flex: '0 0 150px',
    ...sectionStyle,
  };

  return (
    <>
      <div style={headerStyle}>
        <div style={containerStyle}>
          <div style={firstSectionStyle}>
            <span>+0123456789</span>
          </div>
          <div style={sectionStyle}>
            <span>Get 50% Off on Selected Items</span>
            <span style={{ margin: '0 10px' }}>|</span>
            <span>Shop now!</span>
          </div>
          <div style={thirdSectionStyle}>
            <span>B64XXXXX@g.sut.ac.th</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadbarLogo;