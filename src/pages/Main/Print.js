import React from 'react';
import { useLocation } from 'react-router-dom';
import TrData from '../Common/TrData';
import html2pdf from 'html2pdf.js';
import Logo from '../Common/Logo';



const Print = () => {
    const location = JSON.parse(localStorage.getItem("state"));
    console.log(location);
    const data = location.row;
    const name = location.name;
    const address = location.address;
    const filename = name + address.substring(0,5);
    const handleDownload = () => {
        const element = document.getElementById('customer-page');
        if (element) {
            html2pdf()
                .from(element)
                .save(filename +'.pdf');
        }

    };




    
    return (
        <React.Fragment>
        <div id="customer-page">
            <div className='print-header'>
                <Logo/>
            </div>
            <div className='print-details'>
                <div className='print-customer-details' >
                    <h3>Mr.{name}</h3>
                    <h4>{address}</h4> 
                    </div>
                    <div className='print-company-details' >
                        <h3>MOW INTERIORS</h3>
                        <h4>GST IN : 29DGVPP8813CIZR</h4>
                        <h4>+91 7842011678</h4>
                    </div>
            </div>
            <div>
                <table className="PrintTable" id='table-to-pdf'>
                    <tbody>
                    <tr className='tr-headings'>
                        <th>Type</th>
                        <th>Width</th>
                        <th>Height</th>
                        <th>Sqft</th>
                        <th>Rs/Sqft</th>
                        <th>Amount</th>
                    </tr>
                        <TrData data={data} />
                    </tbody>
                </table>
            </div>
        </div>
        <div className='print-download'>
                <button onClick={handleDownload}>Download as PDF</button>
        </div>
        </React.Fragment>
    );
}

export default Print;
