// Core
import { useEffect } from 'react';
import { weatherActions } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

export const useDaySelector = () => {
    const dispatch = useDispatch();

    const { days } = useSelector((state) => state.weather);

    useEffect(() => {
        if (days && days.length > 0) {
            dispatch(weatherActions.selectDay(days[0].id));
        }
    }, [days, dispatch]);
};
