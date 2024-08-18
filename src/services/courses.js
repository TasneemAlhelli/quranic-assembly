import Client from './api'

export const index = async () => {
  try {
    const res = await Client.get('/courses')
    return res.data.courses
  } catch (error) {
    return error
  }
}

export const show = async (id) => {
  try {
    const res = await Client.get(`/courses/${id}`)
    return res.data.course
  } catch (error) {
    return error
  }
}