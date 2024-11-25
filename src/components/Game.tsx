import { useState } from "react";
import styled from "@emotion/styled";

type Move = "✊" | "✋" | "✌️" | null;
type Result = "You win!" | "Opponent wins!" | "It's a tie!" | "";

const GameContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const MovesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

const MoveButton = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background: none;
  border: 2px solid #000;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Result = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem 0;
`;

const Game: React.FC = () => {
    const [playerMove, setPlayerMove] = useState<Move>(null);
    const [opponentMove, setOpponentMove] = useState<Move>(null);
    const [result, setResult] = useState<Result>("");

    const moves: Move[] = ["✊", "✋", "✌️"];

    const determineWinner = (player: Move, opponent: Move): Result => {
        if (!player || !opponent) return "";
        if (player === opponent) return "It's a tie!";
        if (
            (player === "✊" && opponent === "✌️") ||
            (player === "✋" && opponent === "✊") ||
            (player === "✌️" && opponent === "✋")
        ) {
            return "You win!";
        }
        return "Opponent wins!";
    };

    const handleMove = (move: Move) => {
        if (!move) return;
        setPlayerMove(move);
        const randomMove = moves[Math.floor(Math.random() * moves.length)]!;
        setOpponentMove(randomMove);
        setResult(determineWinner(move, randomMove));
    };

    return (
        <GameContainer>
            <MovesContainer>
                {moves.map((move) => (
                    <MoveButton
                        key={move}
                        onClick={() => handleMove(move)}
                        disabled={playerMove !== null}
                    >
                        {move}
                    </MoveButton>
                ))}
            </MovesContainer>

            {playerMove && opponentMove && (
                <>
                    <Result>
                        You chose {playerMove} - Opponent chose {opponentMove}
                    </Result>
                    <Result>{result}</Result>
                </>
            )}
        </GameContainer>
    );
};

export default Game;
