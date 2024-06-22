import { useCallback, useRef, useState } from 'react'
import './FileDownload.css'

export const FileDownload = () => {
  const defaultFileUrl = 'http://link.testfile.org/150MB';
  const [inputVal, setInputVal] = useState(defaultFileUrl)
  const anchorRef = useRef(null)

  const handleChangeUrl = (e) => {
    setInputVal(e.target.value)
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault() // prevent default form submit
    console.log('called', anchorRef.current);
    anchorRef.current.href = inputVal
    console.log(anchorRef.current.href);
    anchorRef.current.click()
    anchorRef.current.href = '#'
  }, [inputVal])

  const handleReset = () =>{
    setInputVal(defaultFileUrl)
  }

  return (
    <form className="fileDownload" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="fileDownloadInputContainer">
        <label htmlFor="fileDownloadUrl">File Url to download: </label>
        <input type="text" name="fileDownloadUrl" id="fileDownloadUrl" value={inputVal} onChange={handleChangeUrl} />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className='hidden' ref={anchorRef} download href="#">hidden download</a>
      </div>
      <div className="buttonsContainer">
        <button type="submit">Download</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  )
}
