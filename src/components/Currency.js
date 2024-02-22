import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export function Currency() {

    const { currency,dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        console.log(event.target.value);
        setNewCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return <div className="currency-label col-sm" onChange={handleCurrencyChange}>
        <select id="currency" value={newCurrency}>
            <option value="$">Dollar</option>
            <option value="£">Pound</option>
            <option value="€">Euro</option>
            <option value="₹">Rupee</option>
        </select>
    </div>;
}
