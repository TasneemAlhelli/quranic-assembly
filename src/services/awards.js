import Client from './api'

export const getAwards = async () => {
  try {
    const res = await Client.get('/awards')
    return res.data.awards
  } catch (error) {
    return error
  }
}