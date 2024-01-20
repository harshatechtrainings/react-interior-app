import React from 'react'
import contactimg from '../assets/images/contact.png'
import exchangeimg from '../assets/images/exchange.png'
import quotationimg from '../assets/images/quotation.png'
import adancedimg from '../assets/images/bookadvanced.png'
import implementimg from '../assets/images/implement.png'
import paymentimg from '../assets/images/finishpayment.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faExchangeAlt, faCommentDollar, faBook, faPlay, faCreditCard, fa1,fa2,fa3,fa4,fa5,fa6 } from '@fortawesome/free-solid-svg-icons';

const FlowCardData = [
    {
        id: 1,
        img: contactimg,
        icon:<FontAwesomeIcon icon={fa1}/>,
        title : "Contact Us",
        description: "Kindly complete the required details on the contact page or simply drop us a missed call on our number.",
    },
    {
        id: 2,
        img: exchangeimg,
        icon: <FontAwesomeIcon icon={fa2} />,
        title: "Exchange Designs",
        description: "Our dedicated team will conduct precise on-site measurements and provide a thorough design briefing.Feel free to exchange your ideas and designs with us to create the perfect solution.",
    },
    {
        id: 3,
        img: quotationimg,
        icon: <FontAwesomeIcon icon={fa3} />,
        title: "Get Quoted",
        description: "After finalizing the plan, our team will promptly provide you with a comprehensive and budget- friendly quotation.",
    },
    {
        id: 4,
        img: adancedimg,
        icon: <FontAwesomeIcon icon={fa4} />,
        title: "Book with Advance",
        description: "To ensure timely completion, you can kickstart your plan by making an advance payment.",
    },
    {
        id: 5,
        img: implementimg,
        icon: <FontAwesomeIcon icon={fa5} />,
        title: "Start Implementing",
        description: "Our highly skilled team will commence work on the site, diligently striving to complete the project within the specified timeline.",
    },
    {
        id: 6,
        img: paymentimg,
        icon: <FontAwesomeIcon icon={fa6} />,
        title: "Finish Payment",
        description: "Once the project is finished, make any outstanding payments.",
    },
]

export default FlowCardData;