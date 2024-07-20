import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/centers')
    return res.data.centers
  } catch (error) {
    return error
  }
}

export const show = async (id) => {
  try {
    const res = await Client.get(`/centers/${id}`)
    console.log('res', res);
    return res.data.center
  } catch (error) {
    return error
  }
}