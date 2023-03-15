import { expect, it } from 'vitest'

interface User {
  id: number
  firstName: string
  lastName: string
  role: 'admin' | 'user' | 'super-admin'
  posts: Array<Post>
}

interface Post {
  id: number
  title: string
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */

const makeUser = (): User => {
  return {
    id: 1,
    firstName: 'Cesar',
    lastName: 'Mejia',
    role: 'super-admin',
    posts: [{ id: 1, title: 'Cool beans' }],
  }
}

it('Should return a valid user', () => {
  const user = makeUser()

  expect(user.id).toBeTypeOf('number')
  expect(user.firstName).toBeTypeOf('string')
  expect(user.lastName).toBeTypeOf('string')
  expect(user.role).to.be.oneOf(['super-admin', 'admin', 'user'])

  expect(user.posts[0].id).toBeTypeOf('number')
  expect(user.posts[0].title).toBeTypeOf('string')
})

/**
 * You can type what a function returns as follows:
 * Function declaration (using arrow function)
 * const myFunc = ():ReturnType => {}
 * Old-style function
 * function myFunc():ReturnType{}
 */
