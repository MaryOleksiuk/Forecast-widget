// Core
import React from 'react';
import cx from 'classnames';

// Hooks
import { useFilter } from '../../hooks/useFilter';
import { useWeather } from '../../hooks/useWeather';

export const Filter = () => {
    const {
        setCloudy,
        setSunny,
        type,
        minTemperature,
        maxTemperature,
        minTemperatureHandler,
        maxTemperatureHandler,
        applyFilter,
        isFiltered,
        isFormBlocked
    } = useFilter();

    const { loadDataFromApi } = useWeather()

    const sunnyWeatherCX = cx('checkbox', {
        selected: type === 'sunny',
        blocked: isFiltered
    });

    const cloudyWeatherCX = cx('checkbox', {
        selected: type === 'cloudy',
        blocked: isFiltered
    });

    const filterButtonJSX = isFiltered ? 'Reset' : 'Filter';

    const submitHandler = isFiltered ? loadDataFromApi : applyFilter;

    return (
        <div className="filter">
            <span className={cloudyWeatherCX} onClick={setCloudy}>Cloudy</span>
            <span className={sunnyWeatherCX} onClick={setSunny}>Sunny</span>
            <p className="custom-input">
                <label htmlFor="min-temperature">Min temperature</label>
                <input
                    id="min-temperature"
                    type="number"
                    onChange={minTemperatureHandler}
                    value={minTemperature}
                    disabled={isFiltered}
                />
            </p>
            <p className="custom-input">
                <label htmlFor="min-temperature">Max temperature</label>
                <input
                    id="max-temperature"
                    type="number"
                    onChange={maxTemperatureHandler}
                    value={maxTemperature}
                    disabled={isFiltered}
                />
            </p>
            <button onClick={submitHandler} disabled={isFormBlocked}>{filterButtonJSX}</button>
        </div>
    );
};
