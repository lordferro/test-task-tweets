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
    url(${require('../img/background/Ellipse.png')}),
    url(${require('../img/background/Rectangle 1.png')}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-repeat: no-repeat;
  background-size: auto, auto, 114px;
  background-position: top 28px center, top 20px left 20px, center, center,
    center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
margin-top: 185px;
  margin-bottom: 26px;
  
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

