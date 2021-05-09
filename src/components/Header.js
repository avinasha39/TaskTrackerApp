import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom';

const Header= ({title, onAdd,showAdd}) => {

    const location = useLocation()

    return (        
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && <Button 
                color={'#1E1F1C'} 
                text={showAdd ? 'Close':'Add'} 
                onClick ={onAdd}>
            </Button>}
        </header>
    )
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',backgroundColor:'black'
// }


export default Header
