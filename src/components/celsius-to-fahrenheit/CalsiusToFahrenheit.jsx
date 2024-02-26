const CelsiusToFahrenheit = ({celsius}) =>{
    const fahrenheit = celsius * 1.8 + 32;
    return <h2>{fahrenheit}°F</h2>
}

export default CelsiusToFahrenheit;