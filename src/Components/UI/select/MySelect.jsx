import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
        
    return (
            <select 
                style={{margin: '15px 200px'}}
                value={value}
                onChange={event => onChange(event.target.value)}
                >
                
                <option  value="">{defaultValue}</option>    {/*disabled*/}
                {options.map(option =>
                    <option key={option.value} 
                            value={option.value}>
                            {option.name}
                    </option>
                    )}
            </select>
    );
};

export default MySelect;