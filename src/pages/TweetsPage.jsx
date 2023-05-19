import { User } from 'components/User/User';
import { Button, Container, StyledLabel, StyledLink } from 'commonStyles.styled';
import { useEffect, useState } from 'react';
import { useGetUsersQuery } from 'redux/tweetsApi';


const Tweets = () => {
  const [page, setPage] = useState(3);
  const { data: users, error, isLoading } = useGetUsersQuery(page);
  const [filter, setFilter] = useState('');
  const [usersToShow, setUsersToShow] = useState(users);

  useEffect(() => {
    const filtering = () => {
      switch (filter) {
        case 'following':
          setUsersToShow(users.filter(user => user.following === true));
          break;
        case 'not following':
          setUsersToShow(users.filter(user => user.following === false));
          break;
        default:
          setUsersToShow(users);
          break;
      }
    };
    filtering();
  }, [filter, users]);

  const handleChange = e => {
    const value = e.target.value;
    setFilter(value);
  };

  if (isLoading) {
    return <StyledLink>loading</StyledLink>;
  }

  return (
    <Container>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        <>
          <>
            <StyledLabel>
              Filter: {' '}
              <input onChange={handleChange} list="filter" />
            </StyledLabel>
            <datalist id="filter">
              <option value="all" />
              <option value="following" />
              <option value="not following" />
            </datalist>
          </>
          {usersToShow && usersToShow.length > 0 ? (
            <ul>
              {usersToShow.map(user => {
                return (
                  <li key={user.id}>
                    <User data={user} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>no users to show</p>
          )}
        </>
      )}
      <Button
        type="button"
        onClick={() => {
          setPage(prevPage => prevPage + 3);
        }}
      >
        Load more
      </Button>
    </Container>
  );
};
export default Tweets;
