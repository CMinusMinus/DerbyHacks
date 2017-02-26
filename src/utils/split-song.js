export function splitSong(string) {
  let [artist, title] = string.split(' LYRICS - ');
  artist = artist.toLowerCase().split(' ')
    .map(name => [
        name.split('').shift().toUpperCase(),
      	...name.substring(1)
      ].join('')
    ).join(' ');
  return [artist, title];
}
