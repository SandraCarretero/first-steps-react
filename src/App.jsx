import CalculateCircleArea from "./components/calculate-circle-area/CalculateCircleArea";
import CalculateSquareArea from "./components/calculate-square-area/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculate-triangle-area/Calculate-Triangle-Area";
import CelsiusToFahrenheit from "./components/celsius-to-fahrenheit/CalsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenhein-to-celsius/FahrenheitToCelsius";
import SayHello from "./components/say-hello/SayHello";
import TotalPrice from "./components/total-price/TotalPrice";
import WriteMessage from "./components/write-message/WriteMessage";

const App = () => {
	return (
		<>
			<SayHello name='Sandra' />
			<CalculateSquareArea side={6} />
			<CalculateTriangleArea side={10} height={3} />
			<CalculateCircleArea radio={10} />
			<CelsiusToFahrenheit celsius={5} />
			<FahrenheitToCelsius fahrenheit={50} />
			<TotalPrice price={100} />
			<WriteMessage name='Sandra' material='cristal' size='grande' note='Cuidado frágil.' />
		</>
	)
};

export default App;
