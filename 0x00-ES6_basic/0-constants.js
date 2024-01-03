export function taskFirst() {
  const t = 'I prefer const when I can.';
  return t;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let comb = 'But sometimes let';
  comb += getLast();

  return comb;
}
