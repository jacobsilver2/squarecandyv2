import React from 'react';
import './VariantSelector.module.css';

const variantSelector = ({option, handleOptionChange}) => (
    <select
        className="Product__option"
        name={option.name}
        key={option.name}
        onChange={handleOptionChange}
    >
        {option.values.map((value) => {
            return (
                <option
                    value={value}
                    key={`${option.name}-${value}`}
                >
                    {`${value}`}
                </option>
            )
        })}
    </select>
);

export default variantSelector;