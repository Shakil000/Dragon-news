import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import QZone from '../QZone';
import Adds from '../Adds';

const RightNavbar = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <section>
                <FindUs></FindUs>
            </section>
            <section>
                <QZone></QZone>
            </section>
            <section>
                <Adds></Adds>
            </section>
        </div>
    );
};

export default RightNavbar;