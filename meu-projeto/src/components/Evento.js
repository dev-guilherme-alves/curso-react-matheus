function Evento({ numero }) {

    function Clicou() {
        console.log('Opa Me Clicaram!');
    }

    return (
        <>
            <p>Clique para disparar um Evento:</p>
            <button onClick={Clicou}>Ativar!</button>
        </>
    )
}

export default Evento