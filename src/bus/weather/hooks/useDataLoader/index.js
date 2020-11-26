// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Actions
import { weatherActions } from '../../actions';

export const useDataLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(weatherActions.fetchDaysAsync());
    }, [dispatch]);
};
