import React from 'react'
import './Query.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faCoffee, faEnvelope, faEnvelopeSquare, faMailBulk, faMailForward, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
function query() {
    return (
        <div class='bg-image'>
            <div class='dotted-line'>
                <div class='dotted-line1'>
                    <div class='dotted-line2'>
                        <span></span>
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card1">
                    <h1 class="head">Start your fundraiser</h1>
                    <p class="para1">It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
                </div>
                <div class="card2">
                    <h1 class="head">Share your fundraiser</h1>
                    <p class="para2">All you need to do is share the fundraiser with your friends and family in no time, support will start pouring in.</p>
                </div>
                <div class="card3">
                    <h1 class="head">Withdraw Funds</h1>
                    <p class="para3">The funds raised can be withdrawn without any hassle directly to your bank account.</p>
                </div>
                <div class="card4">
                    <h1 class="head">We Donate For You</h1>
                    <p class="para4">Our website also donate a percentage of value that is raised through the campaign.</p>
                </div>
            </div>
            <div class='button-container'>
                <button type="button" class="btn1">START A FUNDRAISER FOR FREE</button>
                <button type="button" class="btn2">TALK TO US</button>
            </div>
            <h1 class='head1'>Have any questions for us? Chat with our team on Social Media now.<FontAwesomeIcon class="fonts font1" icon={faFacebookMessenger} /><FontAwesomeIcon class="fonts font2" icon={faWhatsapp} /><FontAwesomeIcon class="fonts font3" icon={faEnvelopeSquare} /><FontAwesomeIcon class="fonts font4" icon={faLinkedin} /><FontAwesomeIcon class="fonts font5" icon={faFacebook} /><FontAwesomeIcon class="fonts font6" icon={faTwitter} /></h1>
            <div class="container">
                <p><FontAwesomeIcon class="horn" icon={faBullhorn} />Our Crowdfunding Platform Charges No Platform Fees<span class="black-word"> 0%</span></p>
            </div>

        </div>
    )
}

export default query