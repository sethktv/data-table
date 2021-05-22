import { useState } from "react"
import ArrowDown from "../arrow/arrowDown"
import ArrowUp from "../arrow/arrowUp"
import InputForm from "../inputForm/inputForm"
import UserSelect from "../userSelect/userSelect"
import UserSearch from "../userSerch/userSearch"


const Table = ({ sorting, State, direction, userData, userDisplay, rowClick, onSearchData, getSearchData }) => {
    const [hide, setHide] = useState('')
    const hideSort = (arr) => {
        sorting(arr)
        setHide(arr)
    }
    const Arrow = direction ? <ArrowDown /> : <ArrowUp />

    return (
        <div className="container">
            <UserSearch onSearchData={onSearchData} />
            <InputForm getSearchData={getSearchData} />
            <table className="table">

                <thead>
                    <tr >
                        <th onClick={() => { hideSort('id') }}>id {hide === 'id' ? Arrow : null} </th>
                        <th onClick={() => { hideSort('firstName') }}>firstName {hide === 'firstName' ? Arrow : null}</th>
                        <th onClick={() => { hideSort('lastName') }}>lastName {hide === 'lastName' ? Arrow : null}</th>
                        <th onClick={() => { hideSort('email') }}>email {hide === 'email' ? Arrow : null}</th>
                        <th onClick={() => { hideSort('phone') }}>phone {hide === 'phone' ? Arrow : null}</th>
                    </tr>
                </thead>
                <tbody>
                    {State.map((item, id) => (
                        <tr key={id} onClick={() => { userData(item) }}>
                            <td>{item.id}</td>
                            <td> {item.firstName} </td>
                            <td> {item.lastName} </td>
                            <td> {item.email} </td>
                            <td> {item.phone} </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            {rowClick ? <UserSelect userDisplay={userDisplay} /> : null}
        </div>
    )
}

export default Table