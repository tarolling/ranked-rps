import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { GameStats, User } from "../types";

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 4px;
`;

const PlayerList = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const PlayerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #eee;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #222;
  }
`;

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState<GameStats>({
        wins: 0,
        losses: 0,
        draws: 0,
    });
    const [onlinePlayers, setOnlinePlayers] = useState<User[]>([]);

    useEffect(() => {
        // Simulate fetching stats and online players
        setStats({
            wins: 15,
            losses: 10,
            draws: 5,
        });

        setOnlinePlayers([
            { id: "1", username: "Player1", rating: 1200 },
            { id: "2", username: "Player2", rating: 1350 },
            { id: "3", username: "Player3", rating: 1150 },
        ]);
    }, []);

    const handleChallenge = (playerId: string) => {
        // Add challenge logic here
        navigate("/game");
    };

    const startRandomGame = () => {
        navigate("/game");
    };

    return (
        <HomeContainer>
            <Card>
                <Title>Your Statistics</Title>
                <StatGrid>
                    <StatItem>
                        <h3>Wins</h3>
                        <p>{stats.wins}</p>
                    </StatItem>
                    <StatItem>
                        <h3>Losses</h3>
                        <p>{stats.losses}</p>
                    </StatItem>
                    <StatItem>
                        <h3>Draws</h3>
                        <p>{stats.draws}</p>
                    </StatItem>
                </StatGrid>
                <Button onClick={startRandomGame}>Quick Match</Button>
            </Card>

            <Card>
                <Title>Online Players</Title>
                <PlayerList>
                    {onlinePlayers.map((player) => (
                        <PlayerCard
                            key={player.id}
                            onClick={() => handleChallenge(player.id)}
                        >
                            <span>{player.username}</span>
                            <span>Rating: {player.rating}</span>
                        </PlayerCard>
                    ))}
                </PlayerList>
            </Card>
        </HomeContainer>
    );
};

export default Home;
