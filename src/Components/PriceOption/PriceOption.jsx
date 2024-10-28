
import React from 'react'; import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const PriceOption = ({ option }) => {
    // console.log(option);
    return (
        <div>
            <div className='text-center py-5 space-y-8 bg-sky-700 rounded-lg text-white flex flex-col min-h-[500px]'>
                <h1 className='text-4xl font-bold'><span className='text-7xl'>{option.price}</span>/mon</h1>
                <h2 className='text-2xl font-semibold '>{option.optionName}</h2>
                <div className='text-start ml-5 flex-grow'>
                    {
                        option.features.map((feature, index) =>
                            <p className='flex items-center gap-x-2' key={index}>
                                <AiFillCheckCircle className='text-green-500'></AiFillCheckCircle>
                                {feature}
                            </p>)
                    }
                </div>
                <div className='mx-4'>
                    <button className='bg-green-500 w-full py-4 text-lg duration-700 rounded-md hover:bg-sky-600 hover:text-xl font-bold'>By Now</button>
                </div>
            </div>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;