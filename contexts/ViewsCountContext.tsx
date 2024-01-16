import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ViewCountContextProps {
    viewCount: number;
    setViewCount: (count: number) => void;
}

export const ViewCountContext = createContext<ViewCountContextProps>({
    viewCount: 0,
    setViewCount: () => {}
});

interface ViewCountProviderProps {
    children: ReactNode;
}

export const ViewCountProvider: React.FC<ViewCountProviderProps> = ({ children }) => {
    const [viewCount, setViewCount] = useState<number>(0);

    useEffect(() => {
        const storedViewCount = localStorage.getItem('numberOfViews');
        if (storedViewCount) {
            setViewCount(parseInt(storedViewCount, 10));
        }
    }, []);

    return (
        <ViewCountContext.Provider value={{ viewCount, setViewCount }}>
            {children}
        </ViewCountContext.Provider>
    );
};
