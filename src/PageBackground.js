import React from 'react';

const PageBackground = () => {
    const backgroundStyle = {
        width: '100%',
        height: '100vh',
        position: 'absolute',

        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundImage: "url('https://cdn0070.qrcodechimp.com/assets/images/fb_cover.svg?v=1704450169d')"
    };

    return (
        <div className="pg_background" style={backgroundStyle}></div>
    );
}

export default PageBackground;
