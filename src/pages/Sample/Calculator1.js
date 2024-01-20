import React, { useState } from 'react';
// import './MyForm.css';
import '../assets/css/Calculator.css';

const MyForm = () => {
    const [rows, setRows] = useState([{ columns: [''] }]);

    const handleAddColumn = (rowIndex, columnIndex) => {
        const newRows = [...rows];
        newRows[rowIndex].columns.splice(columnIndex + 1, 0, '');
        setRows(newRows);
    };

    const handleRemoveColumn = (rowIndex, columnIndex) => {
        const newRows = [...rows];
        newRows[rowIndex].columns.splice(columnIndex, 1);
        setRows(newRows);
    };

    const handleAddRow = () => {
        const newRow = { columns: [''] };
        setRows([...rows, newRow]);
    };

    const handleRemoveRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };

    const handleColumnChange = (rowIndex, columnIndex, event) => {
        const newRows = [...rows];
        newRows[rowIndex].columns[columnIndex] = event.target.value;
        setRows(newRows);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data
        console.log(rows);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {rows.map((row, rowIndex) => (
                <div className="row-container" key={rowIndex}>
                    {row.columns.map((column, columnIndex) => (
                        <div key={columnIndex}>
                            <input
                                className="text-input"
                                type="text"
                                value={column}
                                onChange={(event) => handleColumnChange(rowIndex, columnIndex, event)}
                            />
                            <button
                                className="add-button"
                                type="button"
                                onClick={() => handleAddColumn(rowIndex, columnIndex)}
                            >
                                Add Column
                            </button>
                            {row.columns.length > 1 && (
                                <button
                                    className="remove-button"
                                    type="button"
                                    onClick={() => handleRemoveColumn(rowIndex, columnIndex)}
                                >
                                    Remove Column
                                </button>
                            )}
                        </div>
                    ))}
                    <button className="add-button" type="button" onClick={handleAddRow}>
                        Add Row
                    </button>
                    {rows.length > 1 && (
                        <button className="remove-button" type="button" onClick={() => handleRemoveRow(rowIndex)}>
                            Remove Row
                        </button>
                    )}
                </div>
            ))}
            <button className="submit-button" type="submit">
                Submit
            </button>
        </form>
    );
};

export default MyForm;
