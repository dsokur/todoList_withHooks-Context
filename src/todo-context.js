import React from 'react';
const CounterContext = React.createContext({
	counter: 0
});

const counterContextProvider = (props) => {
	const [counter, setCounter] = React.useState(0);

	return (
		<CounterContext.Provider value={{
			counter,
			setCounter
		}}>
			{ props.children }
		</CounterContext.Provider>
	)
}

export { counterContextProvider }