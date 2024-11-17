import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TimerContextType = {
    leftTimer: number;
    rightTimer: number;
    activeTimer: 'left' | 'right' | null;
    startLeftTimer: () => void;
    startRightTimer: () => void;
    stopTimers: () => void;
    resetTimers: () => void;  // Add resetTimers method
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
    const [leftTimer, setLeftTimer] = useState(0);
    const [rightTimer, setRightTimer] = useState(0);
    const [activeTimer, setActiveTimer] = useState<'left' | 'right' | null>(null);
    const leftIntervalId = useRef<NodeJS.Timeout | null>(null);
    const rightIntervalId = useRef<NodeJS.Timeout | null>(null);

    // Load timers from AsyncStorage when the app starts
    useEffect(() => {
        const loadTimers = async () => {
            const leftStartTime = await AsyncStorage.getItem('leftStartTime');
            const rightStartTime = await AsyncStorage.getItem('rightStartTime');
            if (leftStartTime) {
                const elapsedTime = Math.floor((Date.now() - Number(leftStartTime)) / 1000);
                setLeftTimer(elapsedTime);
            }
            if (rightStartTime) {
                const elapsedTime = Math.floor((Date.now() - Number(rightStartTime)) / 1000);
                setRightTimer(elapsedTime);
            }
        };
        loadTimers();
    }, []);

    const startLeftTimer = () => {
        // If right timer is running, stop it before starting the left timer
        if (rightIntervalId.current) {
            clearInterval(rightIntervalId.current);
            setRightTimer(prev => prev);  // Keep the time as is
            AsyncStorage.removeItem('rightStartTime');
        }

        setActiveTimer('left');
        const startTime = Date.now();
        AsyncStorage.setItem('leftStartTime', startTime.toString());
        leftIntervalId.current = setInterval(() => {
            setLeftTimer(prev => prev + 1);
        }, 1000);
    };

    const startRightTimer = () => {
        // If left timer is running, stop it before starting the right timer
        if (leftIntervalId.current) {
            clearInterval(leftIntervalId.current);
            setLeftTimer(prev => prev);  // Keep the time as is
            AsyncStorage.removeItem('leftStartTime');
        }

        setActiveTimer('right');
        const startTime = Date.now();
        AsyncStorage.setItem('rightStartTime', startTime.toString());
        rightIntervalId.current = setInterval(() => {
            setRightTimer(prev => prev + 1);
        }, 1000);
    };

    const stopTimers = () => {
        // Stop both timers
        if (leftIntervalId.current) clearInterval(leftIntervalId.current);
        if (rightIntervalId.current) clearInterval(rightIntervalId.current);
        
        // Retain the current time
        setActiveTimer(null);
    };

    const resetTimers = () => {
        // Reset both timers to 0
        if (leftIntervalId.current) clearInterval(leftIntervalId.current);
        if (rightIntervalId.current) clearInterval(rightIntervalId.current);
    
        // Reset both timer states to 0
        setLeftTimer(0);
        setRightTimer(0);
        setActiveTimer(null);
    
        // Clear AsyncStorage for both timers
        AsyncStorage.removeItem('leftStartTime');
        AsyncStorage.removeItem('rightStartTime');
    
        // Optional: Add a small delay before final state update to ensure everything is cleared
        setTimeout(() => {
            setLeftTimer(0);
            setRightTimer(0);
        }, 100);
    };

    return (
        <TimerContext.Provider value={{
            leftTimer, rightTimer, activeTimer, 
            startLeftTimer, startRightTimer, stopTimers, resetTimers
        }}>
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
