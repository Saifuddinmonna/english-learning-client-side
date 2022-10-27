import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
        const { premiumAccess } = useContext(AuthContext);
        console.log("from checkout", premiumAccess);
        return (
			<div>
				
				<h2>Your premium access</h2>
				{premiumAccess?.map((member) => (
					<div className='text-primary border rounded-3xl p-3 m-3 bg-red-100' >{member}</div>
				))}
			</div>
		);
};

export default CheckOut;