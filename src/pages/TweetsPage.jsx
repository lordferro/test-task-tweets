import { User } from 'components/User/User';
import { Button } from 'commonStyles.styled';
import { useState } from 'react';
import { useGetUsersQuery } from 'redux/tweetsApi';

const Tweets = () => {
  const [page, setPage] = useState(3);
  const { data: users, error, isLoading } = useGetUsersQuery(page);

  if (isLoading) {
    return <Button>loading</Button>;
  }

  return (
    <>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        <ul>
          {users.map(user => {
            return (
              <li key={user.id}>
                <User data={user} />
              </li>
            );
          })}
        </ul>
      )}
      <Button
        type="button"
        onClick={() => {
          setPage(prevPage => prevPage + 3);
        }}
      >
        Load more
      </Button>
    </>
  );
};
export default Tweets