import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/poetries')
    return res.data.poetries
  } catch (error) {
    return error
  }
}

export const show = async (id) => {
  try {
    const res = await Client.get(`/poetries/${id}`)
    return res.data.poetry
  } catch (error) {
    return error
  }
}