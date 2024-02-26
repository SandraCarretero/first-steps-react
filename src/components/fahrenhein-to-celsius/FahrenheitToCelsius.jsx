const FahrenheitToCelsius  = ({fahrenheit}) =>{
    const celsius = (fahrenheit - 32) / 1.8;
    return <h2>{celsius}ºC</h2>
}

export default FahrenheitToCelsius ;