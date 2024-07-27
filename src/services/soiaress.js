import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/soiaress')
    return res.data.soiarees
  } catch (error) {
    return error
  }
}