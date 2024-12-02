export default function ListItem({ girdi, onDelete, index }) {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">{girdi.mission}
                <div>
                    <span className="badge bg-info me-3">{girdi.releaseDate}</span>
                    <button className="btn bg-danger" onClick={() => onDelete(index)}>Delete</button>
                </div>
            </li>
        </>
    )
}