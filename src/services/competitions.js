import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/competitions')
    return res.data.competitions
  } catch (error) {
    return error
  }
}

export const show = async (id) => {
  try {
    const res = await Client.get(`/competitions/${id}`)
    console.log('res', res)
    return res.data.competition
  } catch (error) {
    return error
  }
}
