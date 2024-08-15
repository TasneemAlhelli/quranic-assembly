import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/characters')
    return res.data.characters
  } catch (error) {
    return error
  }
}
