import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted!');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder='Mobile Number'
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Gmail'
                        required
                    />
                </div>
                <div className="form-group">
                    <div className="checkbox-group">
                        <label htmlFor="1bhk">
                            <input
                                type="checkbox"
                                id="1bhk"
                                value="1bhk"
                                checked={gender === '1bhk'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            1bhk
                        </label>
                        <label htmlFor="2bhk">
                            <input
                                type="checkbox"
                                id="2bhk"
                                value="2bhk"
                                checked={gender === '2bhk'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            2bhk
                        </label>
                        <label htmlFor="3bhk">
                            <input
                                type="checkbox"
                                id="3bhk"
                                value="3bhk"
                                checked={gender === '3bhk'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            3bhk
                        </label>
                        <label htmlFor="individual">
                            <input
                                type="checkbox"
                                id="individual"
                                value="individual"
                                checked={gender === 'individual'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            individual
                        </label>
                        <label htmlFor="other">
                            <input
                                type="checkbox"
                                id="other"
                                value="other"
                                checked={gender === 'other'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            other
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
