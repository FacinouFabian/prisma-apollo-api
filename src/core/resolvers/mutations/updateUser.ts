import { User } from '@prisma/client'
import { updateUser } from '../../libs/users'

type Data = { id: number; firstname: string; lastname: string }

export default async function (_: unknown, args: Data): Promise<User> {
  const { id, firstname, lastname } = args

  const userData = {
    firstname,
    lastname,
  }

  const user = await updateUser(id, userData)

  return user
}
