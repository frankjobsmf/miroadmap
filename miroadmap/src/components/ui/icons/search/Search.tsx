import React from 'react';

interface Props {
    size?: number;
    className?: string;
    color?: string;
}

export const Search = ({ size = 24, className, color }: Props) => {
    return (
        <svg width={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} stroke={color}>
            <path d="M18.5 18.5L22 22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
            <path d="M6.75 3.27093C8.14732 2.46262 9.76964 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 9.76964 2.46262 8.14732 3.27093 6.75" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    );
};
