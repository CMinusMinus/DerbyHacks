export function splitSong(string) {
  let [author, title] = string.split(' LYRICS - ');
  author = author.toLowerCase().split(' ')
    .map(name => [
        name.split('').shift().toUpperCase(),
      	...name.substring(1)
      ].join('')
    ).join(' ');
  return [author, title];
}
