import React, { useState ,useEffect} from 'react';
import FormRow from './Formrow.js';
import '../assets/css/Form.css';
import html2pdf from 'html2pdf.js';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const Form = () => {

    const [readonly, setReadonly] = useState(false);
    const [savedData, setSavedData] = useState(null);
    const [printData, setPrintData] = useState([]);
    const [isPrintPreviewOpen, setIsPrintPreviewOpen] = useState(false);

    const [columns, setColumns] = useState([<FormRow key={0} id={0} validateFormRow={() => { }} readonly={readonly} 
/>]);
 

    const addColumn = (index) => {
        const newColumns = [...columns];
        newColumns.splice(index + 1, 0, <FormRow key={newColumns.length} id={newColumns.length} validateFormRow={() => { }} readonly={readonly} initialValues={{ text: '', numbers: ['', '', '', '', ''] }} />);
        setColumns(newColumns);
    };

    const removeColumn = (index) => {
        const newColumns = [...columns];
        newColumns.splice(index, 1);
        setColumns(newColumns);

    };

    const handleEdit = () => {
        setReadonly(false);
    };

    const handleDownload = () => {
        const element = document.getElementById('table-to-pdf');
        if (element) {
            html2pdf()
                .from(element)
                .save('table_data.pdf');
        }
    };


    useEffect(() => {
        if (isPrintPreviewOpen && savedData.length > 0) {

            
            const printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Print Preview</title></head><body>');
            printWindow.document.write('<table>');

            // Render the table headers
            printWindow.document.write('<tr>');
            printWindow.document.write('<th>Text</th>');
            printWindow.document.write('<th>Number 1</th>');
            printWindow.document.write('<th>Number 2</th>');
            printWindow.document.write('<th>Number 3</th>');
            printWindow.document.write('<th>Number 4</th>');
            printWindow.document.write('<th>Number 5</th>');
            printWindow.document.write('</tr>');

            printData.forEach((row) => {
                printWindow.document.write("<tr>");
                row.forEach((value) => {
                    printWindow.document.write(`<td>${value}</td>`);
                });
                printWindow.document.write("</tr>");
            });

        

            printWindow.document.write('</table>');
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
            setIsPrintPreviewOpen(false);
        }
    }, [isPrintPreviewOpen, savedData]);
    
        

    const handleSubmit = (event) => {
        event.preventDefault();
        //printing data in new table for downlodable
        // const columnValues = columns.map((column) => column.props.values);
        // setSavedData(columnValues);
        
        
        const columnValues = [];

        // Iterate over the columns state and extract the values from each column
        columns.forEach((column) => {
            const values = column.props.values;
            console.log(values);
            columnValues.push(values);
        });

        // Set the savedData state with the columnValues
        setSavedData(columnValues);

        // Set the printData state with the columnValues
        setPrintData(columnValues);
        // setPrintData(columnValues);
        
        //printing data in new table for downlodable
        let isValid = true;
        const newColumns = columns.map((column) => {
            let isRowValid = true;
            
            const validateRow = (validationResult) => {
                if (!validationResult) {
                    isRowValid = false;
                    isValid = false;
                }

                
            };

            // Call the validation function in the FormRow component
            const newColumn = React.cloneElement(column, {
                key: Math.random(),
                validateFormRow: validateRow,
            });

            return newColumn;
        });


        if (isValid) {
            // Perform form submission
            console.log('Form submitted successfully!');
        }

        setColumns(newColumns);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
            {columns.map((column, index) => (
                <div key={index} className="form-row">
                    {column}
                    <a className="add-column-btn" onClick={() => addColumn(index)}>
                        Add Column
                    </a>
                    <a className="remove-column-btn" onClick={() => removeColumn(index)}>
                        Remove Column
                    </a>
                </div>
            ))}
                <button className='FormsubmitButton' type='submit'>Submit</button>
                <button onClick={handleEdit}>Edit</button>
            </form>
            {savedData && (
                <div className="saved-data">
                    <table id="table-to-pdf">
                        <thead>
                            <tr>
                                <th>Text</th>
                                <th>Number 1</th>
                                <th>Number 2</th>
                                <th>Number 3</th>
                                <th>Number 4</th>
                                <th>Number 5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {savedData.map((column, index) => (
                                <tr key={index}>
                                    {column}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {savedData && (
                <React.Fragment>
                    {/* <ReactHTMLTableToExcel
                        id="table-download-btn"
                        className="download-btn"
                        table="table-to-excel"
                        filename="table_data"
                        sheet="sheet1"
                        buttonText="Download"
                    />
                    <button onClick={handleDownload}>Download as PDF</button> */}
                
                            <button onClick={handleDownload}>Download as PDF</button>
                            <button onClick={() => setIsPrintPreviewOpen(true)}>Print</button>
                    
                </React.Fragment>
            )}
        </div>
    );
};

export default Form;

