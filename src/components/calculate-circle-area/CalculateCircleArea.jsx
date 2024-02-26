const CalculateCircleArea = ({radio}) =>{
    const area =  Math.PI * (radio * radio);
    return <h2>Área del círculo {area}</h2>

}

export default CalculateCircleArea;