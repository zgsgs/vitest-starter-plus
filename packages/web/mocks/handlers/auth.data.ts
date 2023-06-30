import { faker } from '@faker-js/faker'

export const auths = [
  {
    id: 1,
    name: 'username1',
    firstName: 'Jason',
    role: ['user'],
  }, {
    id: 2,
    name: 'username2',
    firstName: 'Jason',
    role: ['admin'],
  }, {
    id: 3,
    name: 'username3',
    firstName: 'Jason',
    role: ['super'],
  },
]

function createRandomUser() {
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  }
}
export const user = createRandomUser()
