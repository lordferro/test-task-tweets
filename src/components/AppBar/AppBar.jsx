import { StyledLink } from 'commonStyles.styled';

export const AppBar = () => {
  return (
    <header>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="tweets">Tweets</StyledLink>
        </li>
      </ul>
    </header>
  );
};
