import { useState } from "react"

const UserSearch = ({ onSearchData }) => {
    const [searchData, setSearchData] = useState('')
    return (
        <div className="input-group mb-3 mt-5">
            <input
                value={searchData}
                onChange={(event) => { setSearchData(event.target.value) }}
                type="text"
                className="form-control"
                placeholder="Поиск по таблице"
                aria-label="Поиск по таблице"
                aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
                <button
                    onClick={() => { onSearchData(searchData) }}
                    className="btn btn-outline-secondary"
                    type="button">
                    Поиск
                </button>
            </div>
        </div>
    )
}
export default UserSearch