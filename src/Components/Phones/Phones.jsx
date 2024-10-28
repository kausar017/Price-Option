import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phone, setphone] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(response => {
                const phoneData = response.data.data;
                const phoneWidtFackData = phoneData.map(phone => {
                    const price = parseInt(phone.slug.split('-')[1]); // Fixed split logic
                    const obj = {
                        name: phone.phone_name,
                        price: price
                    };
                    return obj;
                });
                console.log(phoneWidtFackData);
                setphone(phoneWidtFackData);
            })
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div>
            <h1 className='text-5xl font-bold'>Total Phone: {phone.length}</h1>
            {/* <ul>
                {phone.map((p, index) => (
                    <li key={index}>
                        {p.name} - ${p.price}
                    </li>
                ))}
            </ul> */}
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

Phones.propTypes = {};

export default Phones;
