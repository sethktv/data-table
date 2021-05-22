import Loader from "../loader/loader"
import Table from "../table/table"

const Content = ({
  State,
  sorting,
  direction,
  userData,
  userDisplay,
  isLoading,
  rowClick,
  onSearchData,
  getSearchData }) => {
  return (

    isLoading ? <Loader /> :
      <>
        <Table
          State={State}
          sorting={sorting}
          direction={direction}
          userData={userData}
          userDisplay={userDisplay}
          rowClick={rowClick}
          onSearchData={onSearchData}
          getSearchData={getSearchData}
        />
      </>
  )
}

export default Content