// Core
import React from 'react';

// Elements
import { Day } from '../../../../elements/day';

// Hooks
import { useWeather } from '../../hooks/useWeather';
import { useFilter } from '../../hooks/useFilter';

export const Forecast = () => {
    const {
        days,
        selectedDayId,
        selectDay,
    } = useWeather();

    const { isFiltered } = useFilter();

    const makeCallbackForSelection = (id, cb) => {
        return () => {
            cb(id);
        }
    };

    const daysJSX = days && days
        .slice(0, 7)
        .map(({ day, type, temperature, id }) => (
        <Day
            key={String(day)}
            date={day}
            type={type}
            temperature={temperature}
            isSelected={selectedDayId === id}
            cb={makeCallbackForSelection(id, selectDay)}
        />
    ));

    const messageJSX = days && days.length === 0 && isFiltered && (
        <p className="message">
            Within these criteries there are no available days
        </p>
    );

    return (
        <div className="forecast">
            {messageJSX}
            {daysJSX}
        </div>
    );
};
