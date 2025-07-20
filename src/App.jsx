import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" playerSymbol="X"></Player>
          <Player initialName="Player 2" playerSymbol="O"></Player>
        </ol>
      </div>
      LOGS
    </main>
  );
}

export default App;
