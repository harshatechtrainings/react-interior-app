import React, { useState } from 'react';
import '../assets/css/Calculator.css';

const Calculator = () => {
    const [rows, setRows] = useState([{ text: '', numbers: ['', '', '', '', ''] }]);

    const handleTextChange = (index, event) => {
        const newRows = [...rows];
        newRows[index].text = event.target.value;
        setRows(newRows);
    };

    const handleNumberChange = (rowIndex, numberIndex, event) => {
        const newRows = [...rows];
        newRows[rowIndex].numbers[numberIndex] = event.target.value;
        setRows(newRows);
    };

    const handleAddRow = () => {
        const newRow = { text: '', numbers: ['', '', '', '', ''] };
        setRows([...rows, newRow]);
    };

    const handleRemoveRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data
        console.log(rows);
    };

    return (
        <React.Fragment>
        <div className='Calculator'>
            <h1>Calculator</h1>
        </div>
        <div>
        <form className="form-container" onSubmit={handleSubmit}>
            {rows.map((row, index) => (
                <div className="row-container" key={index}>
                    <input
                        className="text-input"
                        type="text"
                        value={row.text}
                        onChange={(event) => handleTextChange(index, event)}
                    />
                    {row.numbers.map((number, numberIndex) => (
                        <input
                            className="number-input"
                            key={numberIndex}
                            type="number"
                            value={number}
                            onChange={(event) => handleNumberChange(index, numberIndex, event)}
                        />
                    ))}
                    {index === rows.length - 1 && (
                        <button className="add-button" type="button" onClick={handleAddRow}>
                            Add Row
                        </button>
                    )}
                    {rows.length > 1 && (
                        <button className="remove-button" type="button" onClick={() => handleRemoveRow(index)}>
                            Remove Row
                        </button>
                    )}
                </div>
            ))}
            <button className="submit-button" type="submit">Submit</button>
        </form>
            </div>
    </React.Fragment>
    );
};

export default Calculator;
