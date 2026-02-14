
const name = 'Javiko500';
const lastName = 'Gutierrez';
const favoriteGames = ['Minecraft', 'League of Legends', 'Fortnite'];
const isActive = true;
const address = {
  street: 'Calle de la Paz',
  number: 123,
  city: 'Cuenca',
}
export function MyAwesomeApp() {
  return (
    <div data-testid="my-awesome-app">
      <h1 data-testid="first-name-title">{name}</h1>
      <h3>{lastName}</h3>
      <p className="my-favorite-class">{favoriteGames.join(', ')}</p>
      <h1>{isActive ? 'Active' : 'Inactive'}</h1>
      <pre style={{
        backgroundColor: 'grey',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
      }}>
        {JSON.stringify(address)}
      </pre>
    </div>
  );
}