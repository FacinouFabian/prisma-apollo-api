import userQueries from './queries/users'
import addUser from './mutations/addUser'
import deleteUser from './mutations/deleteUser'
import updateUser from './mutations/updateUser'

const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    addUser,
    deleteUser,
    updateUser,
  },
}

export default resolvers
