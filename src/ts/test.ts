type Complex = {
  name: string,
  age: number,
  job: string,
  clients: string[],
  friends: string[],
  speak: () => void
}

export const user: Complex = {
  name: 'Jerry',
  age: 12,
  job: 'software developer',
  clients: ['andela', 'x-team'],
  friends: ['john', 'mary'],
  speak: function () {
    console.log(this);
  }
}