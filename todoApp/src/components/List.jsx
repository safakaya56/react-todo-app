import ListItem from "./ListItem";


export default function List({ _girdi, onDeleteItem }) {

    //const nowDate = new Date().toLocaleDateString()

    return (
        <>
            <ul className="list-group mt-3">
                {
                    _girdi.map((e, index) => (
                        <ListItem
                            girdi={e}
                            index={index}
                            onDelete={onDeleteItem}
                        />))
                }
            </ul >
        </>
    )
}
//<ListItem girdi={_girdi} />