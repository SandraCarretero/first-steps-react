const TotalPrice = ({price}) =>{
    const finalPrice = price * 1.21;
    return <h2>Precio con IVA {finalPrice}€</h2>
}

export default TotalPrice;