import './QR.styles.scss'
import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'

export function QR() {
  const codeDefault = 'https://github.com/EdixonAlberto/react-examples'
  const [code, setCode] = useState<string>('')

  // Efecto creado para mostrar al inicio el texto como si se estuviera escribiendo
  useEffect(() => {
    const codeTextList = codeDefault.split('')
    let codeText = ''
    let count = 0

    const interval = setInterval(() => {
      if (count === codeTextList.length) {
        clearInterval(interval)
        return
      }

      codeText += codeTextList[count]
      setCode(codeText)
      count++
    }, 15)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="qr">
      <QRCode value={code} />
      <input type="text" name="qr" value={code} autoFocus onChange={evt => setCode(evt.target.value)} />
    </div>
  )
}
