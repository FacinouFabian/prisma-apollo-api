import { User } from '@prisma/client'
import { deleteUser } from '../../libs/users'

export default async function (_: unknown, args: { id: number }): Promise<User> {
  const { id } = args

  const result = await deleteUser(id)

  return result
}
