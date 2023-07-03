import { faker } from '@faker-js/faker/locale/en'

interface User {
  id: number
  uuid: string
  avatar: string
  birthday: Date
  email: string
  firstName: string
  lastName: string
  sex: string
  subscriptionTier: string
}
function createRandomUser(i: number): User {
  const sex = faker.person.sexType()
  const firstName = faker.person.firstName(sex)
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  const result: User = {
    id: i,
    uuid: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  }

  return result
}
function getUsers(count = 10): User[] {
  const result = []
  for (let i = 0; i < count; i++)
    result.push(createRandomUser(i))
  return result
}

export const users = getUsers()
