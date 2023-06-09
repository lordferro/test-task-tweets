import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  margin-right: 5px;
`;

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

  background: #ebd8ff;
&:hover{opacity:0.8}
  &.following {
    background: #5cd3a8;
  }
  &.waiting  {
    cursor: wait;
  }
  &.underConstruction {
    cursor: wait;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  margin-bottom: 26px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: #ebd8ff;

  display: flex;
  justify-content: center;
  align-items: center;


`;
