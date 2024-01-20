import React, { useState,useEffect } from 'react';

const FormRow = ({ id,validateFormRow, readOnly, initialValues }) => {
    const [text, setText] = useState(initialValues?.text || '');
    const [numbers, setNumbers] = useState(initialValues?.numbers || ['', '', '', '', '']);

    const [errors, setErrors] = useState({ text: '', numbers: [] });

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleNumberChange = (event, index) => {
        const newNumbers = [...numbers];
        newNumbers[index] = event.target.value;
        
        // Check if the first two number fields have values
        if (index === 0 || index === 1) {
            const num1 = Number(newNumbers[0]);
            const num2 = Number(newNumbers[1]);

            // Calculate the sum and assign it to the third number field
            if (!isNaN(num1) && !isNaN(num2)) {
                const sqft = Math.round(((num1 * num2) / 144));
                newNumbers[2] = sqft.toString();
            }
        }
        // Check if the third  number fields have values
        if (index === 2 || index === 3) {
            const num2 = Number(newNumbers[2])
            const num3 = Number(newNumbers[3]);

            if (!isNaN(num3)) {
                newNumbers[4] = num3 * num2;
            }

        }


        if (id === 0 && index === 1) {
        // Swap second input field of the first row with the second input field of the second row
        const secondRowValues = document.getElementById(`1${index + id}`).value;
        newNumbers[index] = secondRowValues;
    } else if (id === 1 && index === 1) {
        // Swap second input field of the second row with the second input field of the first row
        const firstRowValues = document.getElementById(`0${index}`).value;
        newNumbers[index] = firstRowValues;
    }
        setNumbers(newNumbers);
    };


    useEffect(() => {
        validateFormRow(validateRow);
    }, [validateFormRow]);

    const validateRow = () => {
        let isValid = true;
        const newErrors = { text: '', numbers: [] };

        // Validate text field
        if (text.trim() === '') {
            newErrors.text = 'Text field is required.';
            isValid = false;
        }

        // Validate number fields
        const numbersErrors = [];
        numbers.forEach((number, index) => {
            if (number.trim() === '') {
                numbersErrors[index] = 'Number field is required.';
                isValid = false;
            }
        });

        newErrors.numbers = numbersErrors;
        setErrors(newErrors);

        return isValid;
    };

    // Call the validation function from the parent component
    validateFormRow(validateRow);

    return (
        <div>
            <input
                id={id}
                className='text-place'
                type="text"
                placeholder="Enter text"
                value={text}
                readOnly={readOnly}
                onChange={handleTextChange}
            />
            {errors.text && <span>{errors.text}</span>}
            {numbers.map((number, index) => (
                <React.Fragment key={index}>
                    <input
                        id={index+id}
                        className='number-size'
                        type="number"
                        placeholder="Enter number"
                        value={number}
                        readOnly={index === 2 || index === 4 || readOnly}
                        onChange={(event) => handleNumberChange(event, index)}
                    />
                    {errors.numbers[index] && <span>{errors.numbers[index]}</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default FormRow;
