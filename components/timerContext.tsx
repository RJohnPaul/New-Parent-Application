// TimerContext.tsx
import React, { createContext, useContext, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TimerContextType = {
    leftTimer: number;
    rightTimer: number;
    activeTimer: 'left' | 'right' | null;
    startLeftTimer: () => void;
    startRightTimer: () => void;
    stopTimers: () => void;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
    const [leftTimer, setLeftTimer] = useState(0);
    const [rightTimer, setRightTimer] = useState(0);
    const [activeTimer, setActiveTimer] = useState<'left' | 'right' | null>(null);
    const leftIntervalId = useRef<NodeJS.Timeout | null>(null);
    const rightIntervalId = useRef<NodeJS.Timeout | null>(null);

    const startLeftTimer = () => {
        setActiveTimer('left');
        const startTime = Date.now();
        AsyncStorage.setItem('leftStartTime', startTime.toString());
        leftIntervalId.current = setInterval(() => {
            setLeftTimer(prev => prev + 1);
        }, 1000);
    };

    const startRightTimer = () => {
        setActiveTimer('right');
        const startTime = Date.now();
        AsyncStorage.setItem('rightStartTime', startTime.toString());
        rightIntervalId.current = setInterval(() => {
            setRightTimer(prev => prev + 1);
        }, 1000);
    };

    const stopTimers = () => {
        if (leftIntervalId.current) clearInterval(leftIntervalId.current);
        if (rightIntervalId.current) clearInterval(rightIntervalId.current);
        setLeftTimer(0);
        setRightTimer(0);
        setActiveTimer(null);
        AsyncStorage.removeItem('leftStartTime');
        AsyncStorage.removeItem('rightStartTime');
    };

    return (
        <TimerContext.Provider value={{ leftTimer, rightTimer, activeTimer, startLeftTimer, startRightTimer, stopTimers }}>
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => {
    const context = useContext(TimerContext);
    if (context === undefined) {
        throw new Error("useTimer must be used within a TimerProvider");
    }
    return context;
};
