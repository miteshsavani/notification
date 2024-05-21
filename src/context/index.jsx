import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { createContext } from 'react';

const context = createContext();
const STYLE = 'animationStyle';

const AppContext = ({ children }) => {
	const [animationStyle, setAnimationStyle] = useState('animation1');

    useEffect(()=>{
        if (localStorage.getItem(STYLE)) {
            setAnimationStyle(localStorage.getItem(STYLE));
        }
    },[]);

	const handleAnimationStyleChange = (e) => {
		setAnimationStyle(e.target.value);
        localStorage.setItem(STYLE, e.target.value);
	};

	return (
		<context.Provider value={{ animationStyle, handleAnimationStyleChange }}>
			{children}
		</context.Provider>
	);
};

export const useGetAnimation = () => {
	return useContext(context);
};

export default AppContext;
