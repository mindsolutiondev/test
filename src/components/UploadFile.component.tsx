import React, { useState, useEffect } from 'react'
import uploadFileService from '../services/uploadFile.service'

// import uploadFileService from '../services/uploadFile.service'

const UploadFile: React.FC = () => {
  const [file, setFile] = useState<File | null>()
  const [submitReady, setsubmitReady] = useState(false)

  useEffect(() => {
    if (file) {
      setsubmitReady(true)
    } else {
      setsubmitReady(false)
    }
  }, [file])

  // onChange function that reads files on uploading them
  // files read are encoded as Base64
  const onFileUpload = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (!event.currentTarget.files) return
    // Create an instance of FileReader API
    const file_reader = new FileReader()
    const _file = event.currentTarget.files[0]
    setFile(_file)

    file_reader.readAsDataURL(_file)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    uploadFileService.upload(file)
  }

  return (
    <div>
      <h1> Upload csv file </h1>
      <form onSubmit={handleSubmit} className="upload-container">
        <div className="upload-button">
          <input onChange={onFileUpload} type="file" accept=".csv" />
        </div>
        {submitReady ? (
          <button type="submit">Submit</button>
        ) : (
          <button disabled type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  )
}

export default UploadFile
