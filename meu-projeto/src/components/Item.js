import PropTypes from 'prop-types'
import { lazy } from 'react'

function Item({marca, lancamento}) {
    return (
        <>
            <li>
                {marca} - {lancamento}
            </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    lancamento: 0,
}

export default Item