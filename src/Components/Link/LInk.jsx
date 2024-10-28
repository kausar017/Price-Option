
import PropTypes from 'prop-types';

const LInk = ({userData}) => {
    // console.log(userData);
    
    return (
        <div >
            <li className='hover:bg-purple-500 rounded-md px-2'><a href={userData.path}>
                            {userData.name}
                        </a></li>
        </div>
    );
};

LInk.propTypes = {
    userData:PropTypes.object
};

export default LInk;