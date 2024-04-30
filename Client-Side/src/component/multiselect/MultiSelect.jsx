import { useState } from 'react';
import './MultiSelect.scss';

function MultiSelect({ features = [], setFeatures }) {
    const [inputValue, setInputValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission
            const newFeature = inputValue.trim();
            if (newFeature !== "" && features.length < 5) {
                setFeatures([...features, newFeature]);
                setInputValue("");
            }
        } else if (features.length >= 5) {
            event.preventDefault();
        }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleRemoveFeature = (indexToRemove) => {
        setFeatures(features.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="multi-select">
            <span className="multi-select__message">
                5 features maximum. Use letters and numbers only.
            </span>
            <div className={`multi-select__container ${isFocus ? 'focused' : ''}`}>
                {features.map((feature, index) => (
                    <div key={index} className="multi-select__tag">
                        <span className="multi-select__tag-text">
                            {feature}
                        </span>
                        <span
                            onClick={() => handleRemoveFeature(index)}
                            className="multi-select__tag-remove"
                        >
                            &times;
                        </span>
                    </div>
                ))}
                <input
                    type={"text"}
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    className="multi-select__input"
                />
            </div>
        </div>
    );
}

export default MultiSelect;
