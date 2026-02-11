const ListGroup = () => {
  const animes = [
    'Naruto',
    'One Piece',
    'Attack on Titan',
    'My Hero Academia',
    'Demon Slayer'
  ]
  return (
    <ul className="list-group">
      {
        animes.map((anime) => (
          <li className="list-group-item" key={anime}>{anime}</li>
        ))
      }
    </ul>
  );
}

export default ListGroup;