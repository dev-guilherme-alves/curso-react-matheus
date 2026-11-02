import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1998}/>
                <Item marca="Fiat" lancamento={1981}/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List