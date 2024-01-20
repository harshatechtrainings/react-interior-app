import React from 'react';

const TrData = ({ data }) => {
    console.log(data);
    return (
        
            data.map((row, index) => (
           
                <tr key={row.text} className='tr-data'>
                    <td>{row.text}</td>
                    <td>{row.numbers[0]}</td>
                    <td>{row.numbers[1]}</td>
                    <td>{row.numbers[2]}</td>
                    <td>{row.numbers[3]}</td>
                    <td>{row.numbers[4]}</td>
                </tr>
            
            ))
        
    );
}

export default TrData;
