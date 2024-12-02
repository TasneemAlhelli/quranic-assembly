import Client from './api'

export const statistics = async () => {
  try {
    const res = await Client.get('/statistics')
    return res.data.statistics
  } catch (error) {
    return error
  }
}
