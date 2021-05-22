
const Pagination = ({
    pages,
    currentPage,
    nextClick,
    backClick,
    backlightNext,
    backlightBack,
    backlightActive,
    currentPageIndex
}) => {
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${backlightBack}`}>
                        <a
                            onClick={() => { backClick() }}
                            className="page-link"
                            href="/#"
                            aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>

                    {
                        pages.map(p => {
                            return (
                                <li
                                    key={p}
                                    className={currentPageIndex === p ? `page-item ${backlightActive}` : `page-item`}>
                                    <a onClick={() => { currentPage(p) }}
                                        className="page-link"
                                        href="/#">
                                        {p}
                                    </a>
                                </li>
                            )
                        })
                    }

                    <li className={`page-item ${backlightNext}`}>
                        <a onClick={() => { nextClick() }}
                            className="page-link"
                            href="/#"
                            aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination