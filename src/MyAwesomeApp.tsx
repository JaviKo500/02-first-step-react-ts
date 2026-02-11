export function MyAwesomeApp() {
  const name = 'Javiko500';
  const lastName = 'Gutierrez';
  const favoriteGames = ['Minecraft', 'League of Legends', 'Fortnite'];
  const isActive = true;
  const address = {
    street: 'Calle de la Paz',
    number: 123,
    city: 'Cuenca',
  }
  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(', ')}</p>
      <h1>{isActive ? 'Active' : 'Inactive'}</h1>
      <pre>{JSON.stringify(address)}</pre>
    </>
  );
}