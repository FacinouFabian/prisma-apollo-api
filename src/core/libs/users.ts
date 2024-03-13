import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (data: User): Promise<User> => {
  try {
    return await prisma.user.create({ data })
  } catch (error) {
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

export const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  await prisma.$disconnect()

  return users
}

export const getUser = async (data: Partial<User>): Promise<User | null> => {
  try {
    return await prisma.user.findFirst({
      where: { ...data },
    })
  } catch (error) {
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

export const updateUser = async (id: number, data: Partial<User>): Promise<User> => {
  try {
    return await prisma.user.update({
      where: { id },
      data,
    })
  } catch (error) {
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

export const deleteUser = async (id: number): Promise<User> => {
  try {
    return await prisma.user.delete({
      where: { id },
    })
  } catch (error) {
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
