import Button from "./eventos/Button";

function Evento() {

    function MeuEvento() {
        console.log(`ativando primeiro evento!`);
    }

    function SegundoEvento() {
        console.log('Ativando o segundo evento')
    }

    return (
        <>
            <p>Clique para disparar um Evento:</p>
            <Button event={MeuEvento} text="Primeiro Evento" />
            <Button event={SegundoEvento} text="Segundo Evento" />

        </>
    )
}

export default Evento