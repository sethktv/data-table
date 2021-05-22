import { useEffect, useState } from 'react';
import Api from './api/api';
import './App.css';
import Content from './components/content/content';
import Pagination from './components/pagination/pagination';
import StartButton from './components/startButton/startButton';

function App() {
  const [onClick, setOnClick] = useState(false)
  const [direction, setDirection] = useState(true)
  const [userDisplay, setUserDisplay] = useState('')
  const [url, setUrl] = useState('')
  const [totalCountRow, setTotalCountRow] = useState(0)
  const [totalCountPage, setTotalCountPage] = useState(0)
  const [rowClick, setRowClick] = useState(false)
  const [{ State, isLoading, isLoaded, setState, smallUrl, bigUrl }] = Api({ url, onClick })
  const [currentPageIndex, setCurrentPageIndex] = useState(1)
  const [backlightNext, setBacklight] = useState('page-item')
  const [backlightBack, setBacklightBack] = useState('page-item')
  const [backlightActive, setBacklightActive] = useState('page-item')
  const [searchPage, setSearchPage] = useState('')
  const [pushData, setPushData] = useState({})
  const limitCountPage = 50

  const getData = (url) => {
    setUrl(url)
    setOnClick(true)
  }

  const getFilterData = () => {
    if (!searchPage) {
      return State
    } return State.filter(
      data => {
        return (
          data['firstName'].toLowerCase().includes(searchPage.toLowerCase()) ||
          data['lastName'].toLowerCase().includes(searchPage.toLowerCase()) ||
          data['email'].toLowerCase().includes(searchPage.toLowerCase()) ||
          data['phone'].toLowerCase().includes(searchPage.toLowerCase())
        )
      }
    )
  }
  const filterData = getFilterData()

  const onSearchData = (dataPage) => {
    setSearchPage(dataPage)
  }

  const lastPageindex = currentPageIndex * limitCountPage
  const firstPageindex = lastPageindex - limitCountPage + 1
  const pageIndex = filterData.slice(firstPageindex, lastPageindex)

  const getSearchData = ({ id, firstName, lastName, email, phone }) => {
    setPushData({ id, firstName, lastName, email, phone })
  }
  pageIndex.unshift(pushData)

  const currentPage = (i) => {
    setCurrentPageIndex(i)
    setBacklight('')
    setBacklightBack('')
    setBacklightActive('active')
  }

  useEffect(() => {
    if (!isLoaded) {
      return
    }
    setTotalCountRow(filterData.length)
    const CountPage = Math.ceil(totalCountRow / limitCountPage)
    setTotalCountPage(CountPage)
  }, [isLoaded, setTotalCountRow, filterData.length, totalCountRow])

  let pages = []
  for (let i = 1; i <= totalCountPage; i++) {
    pages.push(i)
  }

  const sorting = (data) => {
    console.log(data)
    const copyData = State.concat()
    let sortData

    if (direction) {
      sortData = copyData.sort((a, b) => { return a[data] > b[data] ? 1 : -1 })
    } sortData = copyData.reverse((a, b) => { return a[data] > b[data] ? 1 : -1 })

    setState(sortData)
    setDirection(!direction)
  }

  const userData = (item) => {
    setRowClick(true)
    setUserDisplay(item)
  }

  const nextClick = () => {
    if (currentPageIndex > totalCountPage - 1) {
      setBacklight('')
      return
    }
    setCurrentPageIndex(currentPageIndex + 1)
  }

  const backClick = () => {
    if (currentPageIndex < 2) {
      setBacklightBack('')
      return
    }
    setCurrentPageIndex(currentPageIndex - 1)
  }

  return (
    <div className='container'>
      {
        !onClick ? <StartButton getData={getData} smallUrl={smallUrl} bigUrl={bigUrl} />
          :
          <Content
            State={pageIndex}
            sorting={sorting}
            direction={direction}
            userData={userData}
            userDisplay={userDisplay}
            isLoading={isLoading}
            rowClick={rowClick}
            onSearchData={onSearchData}
            getSearchData={getSearchData}
          />
      }
      {isLoaded && (totalCountRow > limitCountPage) && <Pagination
        pages={pages}
        currentPage={currentPage}
        nextClick={nextClick}
        backClick={backClick}
        backlightNext={backlightNext}
        backlightBack={backlightBack}
        backlightActive={backlightActive}
        currentPageIndex={currentPageIndex}
      />}
    </div>
  );
}

export default App;
