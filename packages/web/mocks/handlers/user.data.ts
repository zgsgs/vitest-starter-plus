import { faker } from '@faker-js/faker/locale/en'
import { t } from '@/locales'

export const users = getUsers()

export const routes = getRoutes()

function getUsers(count = 10) {
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

  const result: User[] = []
  for (let i = 0; i < count; i++)
    result.push(createRandomUser(i))
  return result
}

function getRoutes() {
  const routes: AuthRoute.Route[] = [
    {
      name: 'about',
      path: '/about',
      component: 'self',
      meta: {
        title: t('message.routes.about.about'),
        requiresAuth: true,
        keepAlive: true,
        singleLayout: 'basic',
        permissions: ['super', 'admin', 'user'],
        icon: 'fluent:book-information-24-regular',
        order: 10,
      },
    },
  ]

  const result: AuthRoute.Route[] = routes
  return result
}
