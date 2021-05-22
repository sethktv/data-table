import { useState } from "react"

const InputForm = ({ getSearchData }) => {

    const [openSearch, setOpenSearch] = useState(false)
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        getSearchData({ id, firstName, lastName, email, phone })
    }

    return (
        <>
            {!openSearch ?
                <div className="input-group-append">
                    <button
                        onClick={() => { setOpenSearch(true) }}
                        className="btn btn-outline-secondary"
                        type="button">
                        Добавить
                    </button>
                </div>
                :
                <form onSubmit={submitHandler} className="row g-3 needs-validation" >

                    <div className="col-md-4">
                        <label className="form-label">id пользователя</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">id</span>
                            <input
                                onChange={(event) => { setId(event.target.value) }}
                                value={id}
                                type="number"
                                className="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend" required
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Имя</label>
                        <input onChange={(event) => { setFirstName(event.target.value) }}
                            value={firstName}
                            type="text"
                            className="form-control"
                            id="validationCustom01" required
                        />

                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Фамилия</label>
                        <input onChange={(event) => { setLastName(event.target.value) }}
                            value={lastName}
                            type="text"
                            className="form-control"
                            id="validationCustom02" required
                        />
                    </div>

                    <div className="form-group col-md-4">
                        <label >Email</label>
                        <input onChange={(event) => { setEmail(event.target.value) }}
                            value={email}
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email" required
                        />
                    </div>

                    <div className="col-md-4">
                        <label>Телефон</label>
                        <input onChange={(event) => { setPhone(event.target.value) }}
                            value={phone}
                            className="form-control"
                            id="example-tel-input"
                            type="number"
                            placeholder="(777)777-7777" required
                        />
                    </div>

                    <div className="col-12">
                        <button
                            className="btn btn-primary"
                            type="submit">
                            Отправить форму
                        </button>
                    </div>
                </form>
            }
        </>
    )
}

export default InputForm