// Core
import React from 'react';

// Styles
import './styles/index.scss';

// Components
import { Filter } from './components/filter';
import { Day } from './components/day';
import { Forecast } from './components/forecast';

// Hooks
import { useWeather } from './hooks/useWeather';
import { useDataLoader } from './hooks/useDataLoader';
import { useDaySelector } from './hooks/useDaySelector';

// Elements
import { Spinner } from '../../elements/spinner';

export const Weather = () => {
    // Load data from API
    useDataLoader();

    // Select current day
    useDaySelector();

    const { isLoading } = useWeather();

    return (
        <main>
            <Filter />
            <Day />
            <Forecast />
            <Spinner isLoading={isLoading} />
        </main>
    )
};
