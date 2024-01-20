import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SetTableData from '../Common/SetTableData';
import InputListData from '../../config/InputListData';


const DyanamicFormD = () => {
    const values = InputListData;
    const [rows, setRows] = useState([{ text: values, numbers: ['', '', '', '', ''] }]);
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [inputFieldsReadOnly, setInputFieldsReadOnly] = useState(false);
    const [saveButton, SetSaveButton] = useState(true);
    const [downloadButton, SetdownloadButton] = useState(false);


    const placeholders = ['width','height','sqft','Rs/Sqft','Amount']

    const handleChange = (numberIndex,index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        // Check if the first two number fields have values
        if (numberIndex === 1) {
            const num1 = Number(updatedRows[index][field][0]);
            const num2 = Number(updatedRows[index][field][1]);
            // Calculate the sum and assign it to the third number field
            if (!isNaN(num1) && !isNaN(num2)) {
                const sqft = Math.round(((num1 * num2) / 144));
                updatedRows[index][field][2] = sqft.toString();
            }
        }
        // Check if the third  number fields have values
        if (numberIndex === 3) {
            const num2 = Number(updatedRows[index][field][2])
            const num3 = Number(updatedRows[index][field][3]);

            if (!isNaN(num3)) {
                updatedRows[index][field][4] = num3 * num2;
            }

        }

        setRows(updatedRows);
    };


    const handleCustomerName = (value) => {
        setCustomerName(value);
    }

    const handleCustomerAddress = (value) => {
        setCustomerAddress(value);
    }
    

    const handleAddRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index + 1, 0, { text: '', numbers: ['', '', '', '', ''] });
        setRows(updatedRows);
    };

    const handleRemoveRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    const handleSave = () => {
        setInputFieldsReadOnly(true);
        SetSaveButton(false);
        SetdownloadButton(true);
  
        // const updatedRows = [...rows, { customername: customerName, customeraddress: customerAddress}];
        // setRows(updatedRows);
        // console.log(rows);

    }

    const handleEdit = () => {
        SetSaveButton(true);
        SetdownloadButton(false);
        setInputFieldsReadOnly(false);
    }

    const handleDownload = () => {
        <SetTableData data={rows} />
        const pageReference = "http://localhost:3000/calculator";
        const printWindow = window.open(pageReference, 'framename');
        printWindow.document.write('<html><head><title>Print Form Data</title></head><body className="PrintPage">');
        printWindow.document.write('<table className="PrintTable">');
        printWindow.document.write('<tr><th>Text</th><th>Number 1</th><th>Number 2</th><th>Number 3</th><th>Number 4</th><th>Number 5</th></tr>');
        rows.forEach((row) => {
            printWindow.document.write(`<tr><td>${row.text}</td><td>${row.numbers[0]}</td><td>${row.numbers[1]}</td><td>${row.numbers[2]}</td><td>${row.numbers[3]}</td><td>${row.numbers[4]}</td></tr>`);
        });
        printWindow.document.write('</table>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        // Automatically open print tab
        // printWindow.print();
    };

    const savetoLocalStoarge = () => {
        const state = {
            row: rows,
            name: customerName,
            address: customerAddress,
}
        localStorage.setItem("state", JSON.stringify(state));
    }

    return (
        <div className='container'>

            <div className='form-row-address'>
                <input type='text' value={customerName} placeholder='Customer Name' onChange={(e) => handleCustomerName(e.target.value)} />
                <input type='text' value={customerAddress} placeholder='Address' onChange={(e) => handleCustomerAddress(e.target.value)}/>
            </div>
            {rows.map((row, index) => (
                <div key={index} className="form-row">
                    {/* <input
                        className='text-place'
                        type="text"
                        value={row.text}
                        onChange={(e) => handleChange(null,index, 'text', e.target.value)}
                        placeholder="Item"
                        readOnly={inputFieldsReadOnly}
                    /> */}
                    <select className='text-place' value={row.text} onChange={(e) => handleChange(null,index, 'text', e.target.value)}>
                        <option className='constant-option' value="">--</option>
                        {values.map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                    {row.numbers.map((number, numberIndex) => (
                        <input
                            key={numberIndex}
                            className='number-size'
                            type="number"
                            value={number}
                            onChange={(e) => handleChange(numberIndex,index, 'numbers', [...row.numbers.slice(0, numberIndex), e.target.value, ...row.numbers.slice(numberIndex + 1)])}
                            placeholder={placeholders[numberIndex]}
                            readOnly={numberIndex === 2 || numberIndex === 4 || inputFieldsReadOnly}
                        />
                    ))}
                    {saveButton ? <button className='add-column-btn' onClick={() => handleAddRow(index)}>Add</button> : ""}
                    {saveButton ?<button className='remove-column-btn' onClick={() => handleRemoveRow(index)}>Remove</button>:""}
                </div>
            ))}
            <div className='bottom-buttons'>
                {/* {saveButton?<button className='add-all-btn' onClick={() => handleAddRow(1)}>Add Row at End</button>:""} */}
                {saveButton ? <button className='save-all-btn' onClick={handleSave}>Save</button> : ""}
                {!saveButton ? <button className='save-all-btn' onClick={handleEdit}>Edit</button> : ""}
                {/* {downloadButton?<button className='save-all-btn'  onClick={handleDownload}>Download</button>:""} */}
                {downloadButton ? <Link className='save-all-btn'
                    to='/print' target='_blank'  onClick={() => savetoLocalStoarge()}
                    
                >
                 Preview
                </Link>:""}
            </div>
        </div>
    );
};

export default DyanamicFormD;
