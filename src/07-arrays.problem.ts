interface User {
  id: number
  firstName: string
  lastName: string
  role: 'admin' | 'user' | 'super-admin'
  posts: Post[]
}

interface Post {
  id: number
  title: string
}

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Pocock',
  role: 'admin',
  posts: [
    {
      id: 1,
      title: 'How I eat so much cheese',
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
}

/**
 * You can declare an array type in two ways:
 * 1. Using the utility operator `Array`, e.g. Array<Type>
 * 2. Tacking on the `[]` operator to a type, e.g. Type[]
 */
