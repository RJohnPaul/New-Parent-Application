import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TimerContextType = {
    leftTimer: number;
    rightTimer: number;
    sleepTimer: number; // Add sleep timer
    activeTimer: 'left' | 'right' | 'sleep' | null;
    type: 'breastfeeding' | 'sleep';
    setType: (newType: 'breastfeeding' | 'sleep') => void;
    startLeftTimer: () => void;
    startRightTimer: () => void;
    startSleepTimer: () => void; // Start sleep timer
    stopTimers: () => void;
    resetTimers: () => void;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
    const [leftTimer, setLeftTimer] = useState(0);
    const [rightTimer, setRightTimer] = useState(0);
    const [sleepTimer, setSleepTimer] = useState(0); // Sleep timer state
    const [activeTimer, setActiveTimer] = useState<'left' | 'right' | 'sleep' | null>(null);
    const [type, setType] = useState<'breastfeeding' | 'sleep'>('breastfeeding');
    const leftIntervalId = useRef<NodeJS.Timeout | null>(null);
    const rightIntervalId = useRef<NodeJS.Timeout | null>(null);
    const sleepIntervalId = useRef<NodeJS.Timeout | null>(null); // Sleep interval ref

    useEffect(() => {
        const loadTimers = async () => {
            const leftStartTime = await AsyncStorage.getItem('leftStartTime');
            const rightStartTime = await AsyncStorage.getItem('rightStartTime');
            const sleepStartTime = await AsyncStorage.getItem('sleepStartTime'); // Load sleep start time
            const savedType = await AsyncStorage.getItem('type');

            if (leftStartTime) {
                const elapsedTime = Math.floor((Date.now() - Number(leftStartTime)) / 1000);
                setLeftTimer(elapsedTime);
            }
            if (rightStartTime) {
                const elapsedTime = Math.floor((Date.now() - Number(rightStartTime)) / 1000);
                setRightTimer(elapsedTime);
            }
            if (sleepStartTime) {
                const elapsedTime = Math.floor((Date.now() - Number(sleepStartTime)) / 1000);
                setSleepTimer(elapsedTime);
            }
            if (savedType) {
                setType(savedType as 'breastfeeding' | 'sleep');
            }
        };
        loadTimers();
    }, []);

    const startLeftTimer = () => {
        stopTimers();
        setType('breastfeeding')
        setActiveTimer('left');
        const startTime = Date.now();
        AsyncStorage.setItem('leftStartTime', startTime.toString());
        leftIntervalId.current = setInterval(() => {
            setLeftTimer(prev => prev + 1);
        }, 1000);
    };

    const startRightTimer = () => {
        stopTimers();
        setType('breastfeeding')
        setActiveTimer('right');
        const startTime = Date.now();
        AsyncStorage.setItem('rightStartTime', startTime.toString());
        rightIntervalId.current = setInterval(() => {
            setRightTimer(prev => prev + 1);
        }, 1000);
    };

    const startSleepTimer = () => {
        stopTimers();
        setType('sleep')
        setActiveTimer('sleep');
        const startTime = Date.now();
        AsyncStorage.setItem('sleepStartTime', startTime.toString());
        sleepIntervalId.current = setInterval(() => {
            setSleepTimer(prev => prev + 1);
        }, 1000);
    };

    const stopTimers = () => {
        if (leftIntervalId.current) clearInterval(leftIntervalId.current);
        if (rightIntervalId.current) clearInterval(rightIntervalId.current);
        if (sleepIntervalId.current) clearInterval(sleepIntervalId.current);
        setActiveTimer(null);
    };

    const resetTimers = () => {
        stopTimers();
        setLeftTimer(0);
        setRightTimer(0);
        setSleepTimer(0); // Reset sleep timer
        AsyncStorage.removeItem('leftStartTime');
        AsyncStorage.removeItem('rightStartTime');
        AsyncStorage.removeItem('sleepStartTime'); // Clear sleep timer from storage
    };

    const updateType = (newType: 'breastfeeding' | 'sleep') => {
        setType(newType);
        AsyncStorage.setItem('type', newType);
    };

    return (
        <TimerContext.Provider
            value={{
                leftTimer,
                rightTimer,
                sleepTimer, 
                activeTimer,
                type,
                startLeftTimer,
                startRightTimer,
                startSleepTimer, 
                setType: updateType,
                stopTimers,
                resetTimers,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => {
    const context = useContext(TimerContext);
    if (context === undefined) {
        throw new Error('useTimer must be used within a TimerProvider');
    }
    return context;
};
