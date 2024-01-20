import React, { useState } from 'react';

const DynamicForm = () => {
    const [rows, setRows] = useState([{ text: '', numbers: ['', '', '', '', ''] }]);

    const handleChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const handleAddRow = () => {
        setRows([...rows, { text: '', numbers: ['', '', '', '', ''] }]);
    };

    const handleRemoveRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    const handleSave = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print Form Data</title></head><body>');
        printWindow.document.write('<table>');
        printWindow.document.write('<tr><th>Text</th><th>Number 1</th><th>Number 2</th><th>Number 3</th><th>Number 4</th><th>Number 5</th></tr>');
        rows.forEach((row) => {
            printWindow.document.write(`<tr><td>${row.text}</td><td>${row.numbers[0]}</td><td>${row.numbers[1]}</td><td>${row.numbers[2]}</td><td>${row.numbers[3]}</td><td>${row.numbers[4]}</td></tr>`);
        });
        printWindow.document.write('</table>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div>
            {rows.map((row, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={row.text}
                        onChange={(e) => handleChange(index, 'text', e.target.value)}
                        placeholder="Text"
                    />
                    {row.numbers.map((number, numberIndex) => (
                        <input
                            key={numberIndex}
                            type="number"
                            value={number}
                            onChange={(e) => handleChange(index, 'numbers', [...row.numbers.slice(0, numberIndex), e.target.value, ...row.numbers.slice(numberIndex + 1)])}
                            placeholder={`Number ${numberIndex + 1}`}
                        />
                    ))}
                    <button onClick={() => handleRemoveRow(index)}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddRow}>Add Row</button>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default DynamicForm;
