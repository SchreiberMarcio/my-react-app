
import styled from "styled-components";

interface Tweet {
  id: number;
  user: string;
  username: string;
  content: string;
}

const FeedContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const TweetCard = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  padding-bottom: 10px;

  strong {
    font-size: 1.1rem;
  }

  span {
    color: #555;
    margin-left: 5px;
  }

  p {
    margin: 5px 0 0;
    color: #333;
  }
`;

export function Feed()  {
  const tweets: Tweet[] = [
    {
      id: 1,
      user: "Growdev",
      username: "@growdev",
      content: "Esta é uma demonstração da aplicação...",
    },
    {
      id: 2,
      user: "Michael Scott",
      username: "@michael__scott",
      content: "Prefiro ser temido ou amado? Fácil...",
    },
    {
      id: 3,
      user: "Daphne Dog",
      username: "@daphne",
      content: "Hoje comi a comidinha que a mamãe fez...",
    },
  ];

  return (
    <FeedContainer>
      <h2>Página Inicial</h2>
      <div>
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id}>
            <strong>{tweet.user}</strong> <span>{tweet.username}</span>
            <p>{tweet.content}</p>
          </TweetCard>
        ))}
      </div>
    </FeedContainer>
  );
};

export default Feed;
