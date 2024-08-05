'use client';

import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addFoundationDate } from "../../../features/filter/employerFilterSlice";

const FoundationDate = () => {
    const { foundationDate: getFoundationDate } = useSelector((state) => state.employerFilter) || {};
    const [foundationDate, setFoundationDate] = useState({
        min: 1950,
        max: 2023,
    });

    const dispatch = useDispatch();

    const handleOnChange = (value) => {
        setFoundationDate(value);
        dispatch(addFoundationDate(value));
    };

    useEffect(() => {
        if (getFoundationDate) {
            setFoundationDate(getFoundationDate);
        }
    }, [getFoundationDate]);

    return (
        <div className="range-slider-one salary-range">
            <InputRange
                formatLabel={(value) => ``}
                minValue={1950}
                maxValue={2023}
                value={foundationDate}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="d-inline-flex align-items-center">
                        <span className="min">{foundationDate?.min}</span>
                        <span className="max ms-2">{foundationDate?.max}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FoundationDate;
