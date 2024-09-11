import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/soirees')
    return res.data.soirees
  } catch (error) {
    return error
  }
}
