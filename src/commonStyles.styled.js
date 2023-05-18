import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  margin-top: 26px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: #ebd8ff;

  &.following {
    background: #5cd3a8;
  }
  &.waiting  {
    cursor: wait;
  }
  &.underConstruction {
    cursor: wait;
  }
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  margin-top: 26px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: #ebd8ff;

  display: flex;
  justify-content: center;
  align-items: center;
  
  &.following {
    background: #5cd3a8;
  }
  &.waiting {
    cursor: wait;
  }
  &.underConstruction {
    cursor: wait;
  }
`;
