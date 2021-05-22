import axios from "axios"
import { useEffect, useState } from "react"

const Api = ({ url, onClick }) => {
  const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

  const [State, setState] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  const getUsers = () => { }

  useEffect(() => {
    if (!onClick) {
      return
    }
    axios.get(url)
      .then(res => {
        setState(res.data)
        setIsLoading(false)
        setIsLoaded(true)
      })
  }, [url, onClick])
  return [{ State, isLoading, isLoaded, setState, setIsLoading, smallUrl, bigUrl }, getUsers]
}
export default Api