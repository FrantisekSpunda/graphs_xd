import PropTypes from 'prop-types'
import Anime from 'react-anime'

const Input = ({type, name, className, placeholder, children}) => {

    return (
        <div className={className}>
            <Anime
            duration='500'
            easing='easeOutQuart'
            opacity={['0','1']}
            width={['0', '100%']}
            >
                <>
                    { children }
                    <input className='font-sans text-sm p-2 rounded-md border-0 bg-gray-100 border outline-none w-full' type={type} name={name} placeholder={placeholder} />
                </>
            </Anime>
        </div>
    )
}

Input.defaultProps = {
    type: 'text',
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.instanceOf(Element)
}

export default Input