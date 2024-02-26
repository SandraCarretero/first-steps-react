const CalculateCircleArea = ({radio}) =>{
    const area =  (Math.PI * Math.pow(radio, 2)).toFixed(2);
    return <h2>Área del círculo {area}</h2>

}

export default CalculateCircleArea;