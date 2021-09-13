import { createUser } from '../../libs/users'

type Data = { firstname: string; lastname: string }

export default async function (_: unknown, args: Data): Promise<User | Error> {
  const { firstname, lastname } = args
  const result = await createUser({
    firstname,
    lastname,
  })

  return result
}
