import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 380px;
  height: 460px;

  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  background-image: url(${require('../img/background/bg1.png')}),
    url(${require('../img/background/bg2.png')}),
  
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-repeat: no-repeat;
  background-size: auto, auto;
  background-position: top 28px center, top 20px left 20px, center;

  &::before {
    content: '';
    display: flex;
    width: 100%;
    height: 8px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    background-color: #ebd8ff;
    position: relative;
    top: 222px;
  }
`;

export const Avatar = styled.img`
box-sizing: border-box;
  display: inline-block;
  position: relative;
  padding: 8px;
  background: #fbf8ff;

  border-radius: 50%;
  margin-top: 178px;
  margin-bottom: 26px;
  z-index: 1;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  &.first {
    margin-bottom: 16px;
   
  }

`;
