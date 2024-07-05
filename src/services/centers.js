import Client from './api'

export const getCenters = async () => {
  try {
    const res = await Client.get('/centers')
    return res.data.centers
  } catch (error) {
    return error
  }
}