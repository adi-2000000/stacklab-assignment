import React from 'react';
import './profile.css'; // Make sure to import the CSS file

const Profile = () => {
    return (
        <div className="container1">
            {/* Header */}
            <div className="qr_page_loader" style={{ display: 'none' }}>
                <img className="loader_img" src="//cdn0030.qrcodechimp.com/assets/images/def_qrc_loader.png?v=1715335332b" alt="Loader" />
            </div>

            {/* Main Content */}
            <div id="qrc_page_qrcode_popup" className="show">
                {/* Close Button */}
                <button className="close-button" onClick={() => window.location.href = 'http://localhost:3000/'}>
    &times;
</button>


                {/* Profile Section */}
                <div id="qr_profile_section">
                    <div className="qrc_profile_inner_info_popup">
                        <div className="qrc_profile_pic_popup" style={{ backgroundImage: "url('https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/1598683042998_m.jpeg')" }}></div>
                        <h2>Suyash Waghate</h2>
                        <p>STACKLAB.IN</p>
                        <p className="qrc_profile_company">Co-Founder</p>
                    </div>
                    <div className="qrc_profile_qrcode_popup">
                        <img width="200" src="//cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/qr/656036335af76421f50d2fb2_t.png?v=1716622438969" className="img-fluid" alt="QR Code" />
                    </div>
                </div>

                {/* Add to Wallet */}
                <div className='card'>
                    Add your Digital Business Card to Wallet
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '40px', gap: '18px' }}>
                    <a
                        href="#"
                        className="qrc_btn_add_to_google_wallet"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '8px 16px',
                            margin: '8px',
                            border: '2px solid #007bff',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.3s, color 0.3s, border-color 0.3s'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#000';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.borderColor = '#0056b3';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '#fff';
                            e.currentTarget.style.color = '#007bff';
                            e.currentTarget.style.borderColor = '#007bff';
                        }}
                    >
                        <img height="32" src="./wallet2.png" alt="Google Wallet" style={{ marginRight: '8px' }} />
                        Google Wallet
                    </a>

                    <a
                        href="#"
                        className="qrc_btn_add_to_apple_wallet"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '8px 16px',
                            margin: '8px',
                            border: '2px solid #000',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            color: '#000',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.3s, color 0.3s, border-color 0.3s'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#000';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.borderColor = '#333';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '#fff';
                            e.currentTarget.style.color = '#000';
                            e.currentTarget.style.borderColor = '#000';
                        }}
                    >
                        <img height="32" src="./wallet.jpg" alt="Apple Wallet" style={{ marginRight: '8px' }} />
                        Apple Wallet
                    </a>
                </div>

                {/* Popup Buttons */}
                <div className="qr_popup_button_container">
                    <a href="#" className="qrc_addtohomescreen qrc_btn_add_to_home_screen">
                        <div className="qrc_action_button_icon">
                            <img src="./home.png" alt="Add to Home Screen" />
                        </div>
                        <div className="qrc_addtohomescreen_text">Add to Home Screen</div>
                    </a>
                    <a href="#" className="qrc_addtohomescreen qrc_btn_save_t0_gallery">
                        <div className="qrc_action_button_icon">
                            <img src="/gallary.png" alt="Add to Gallery" />
                        </div>
                        <div className="qrc_addtohomescreen_text">Add to Home Screen</div>
                    </a>
                </div>
                <div className="qrc_addtohome_info" style={{ display: 'none' }}>
                    <img src="//cdn0070.qrcodechimp.com/assets/images/add_to_homescreen_1.png?v=1715335332b" className="img-fluid" alt="Add to Home Screen" />
                    <img src="//cdn0070.qrcodechimp.com/assets/images/add_to_homescreen_2.png?v=1715335332b" className="img-fluid" alt="Add to Home Screen" />
                </div>
            </div>
        </div>
    );
}

export default Profile;
