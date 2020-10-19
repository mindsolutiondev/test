import http from './baseAxios'

class UploadFileService {
  upload(file: any) {
    const formData = new FormData()
    formData.append('file', file)

    return http.post('/upload/csv', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
}

export default new UploadFileService()
