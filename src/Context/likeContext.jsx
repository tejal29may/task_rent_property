import { createContext } from "react";
export const LikedContext = createContext();
import { useState } from "react";
export const LikedProvider = ({ children }) => {
    const [liked, setLiked] = useState([]);

    const toggleLiked = (item) => {
        setLiked(prevLiked => {
            if (prevLiked.some(e => e.name === item.name)) {
                return prevLiked.filter(e => e.name !== item.name);
            } else {
                return [...prevLiked, item];
            }
        });
    };

    console.log("liked ",liked);

    return (
        <LikedContext.Provider value={{ liked, toggleLiked }}>
            {children}
        </LikedContext.Provider>
    );
};