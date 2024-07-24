import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/achievements')
    return res.data.achievements
  } catch (error) {
    return error
  }
}