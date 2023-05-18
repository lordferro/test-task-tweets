import { useSetFollowMutation } from 'redux/tweetsApi';
import { Avatar, Text, Wrapper } from './User.styled';
import { Button } from 'commonStyles.styled';

export const User = ({ data }) => {
  const { id, following, avatar, tweets, followers } = data;
  const [setData, { isLoading }] = useSetFollowMutation();
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const handlerClick = () => {
    const newData = following
      ? { id: id, following: false, followers: followers - 1 }
      : { id: id, following: true, followers: followers + 1 };
    setData(newData);
  };

  return (
    <Wrapper>
      <Avatar alt="avatar" src={avatar} width={80} />

      <Text className={'first'}>{tweets} TWEETS</Text>
      <Text> {formatNumber(followers)} FOLLOWERS</Text>
      <Button
        className={[following ? 'following' : '', isLoading ? 'waiting' : '']}
        type="button"
        onClick={handlerClick}
      >
        {following ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Wrapper>
  );
};
