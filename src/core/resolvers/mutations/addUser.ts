import { User } from '@prisma/client'
import { createUser } from '../../libs/users'

export default async function (_: unknown, args: User) {
  return await createUser(args)
}
