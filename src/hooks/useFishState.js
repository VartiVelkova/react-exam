import { useEffect, useMemo, useState } from 'react';
import * as fishService from '../services/fishService.js';

const useFishState = (fishId) => {
    const [fish, setFish] = useState({});

    const controller = useMemo(()=> {
        const controller = new AbortController();

        return controller;
    }, []);

    useEffect(() => {
        fishService.getOne(fishId, controller.signal)
        .then(fishResult => {
            setFish(fishResult)
        })

        return () => {
            controller.abort();
        }
    }, [fishId, controller])

    return [fish, 
            setFish
        ]
};

export default useFishState;