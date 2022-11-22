import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContex';

const About = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>This About page</h2>
            {user?.name}
        </div>
    );
};

export default About;