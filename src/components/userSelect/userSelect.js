const UserSelect = ({ userDisplay }) => {

    const StreetAddress = userDisplay && userDisplay.address ? userDisplay.address.streetAddress : null
    const City = userDisplay && userDisplay.address ? userDisplay.address.city : null
    const State = userDisplay && userDisplay.address ? userDisplay.address.state : null
    const Zip = userDisplay && userDisplay.address ? userDisplay.address.zip : null

    return (
        <div>
            <div>Выбран пользователь: <b>{userDisplay.firstName}</b></div>
            <div>Описание: <b>{userDisplay.description}</b></div>
            <div>Адрес проживания: <b> {StreetAddress} </b></div>
            <div>Город: <b>{City}</b></div>
            <div>Провинция/штат: <b>{State}</b></div>
            <div> Индекс: <b>{Zip}</b></div>
        </div>
    )
}
export default UserSelect