import { useGetAnimation } from '../../context';
import './style.css';

const RadioInput = ({ name, currentValue, value, onChange }) => {
	const labelName = value.slice(0, value.length - 1);
	const labelIndex = value.slice(-1);
	return (
		<div className="radioButton">
			<label>
				<input
					type="radio"
					name={name}
					checked={currentValue === value}
					value={value}
					onChange={onChange}
				/>
				{`${labelName.charAt(0).toUpperCase()}${labelName.slice(
					1
				)} ${labelIndex}`}
			</label>
		</div>
	);
};

const ChooseAnimation = () => {
	const { animationStyle, handleAnimationStyleChange } = useGetAnimation();

	return (
		<div className="animationBlock">
			<div>Choose animation style</div>
			<div className="radioArea">
				<RadioInput
					name="animationStyle"
					value="animation1"
					currentValue={animationStyle}
					onChange={handleAnimationStyleChange}
				/>
				<RadioInput
					name="animationStyle"
					value="animation2"
					currentValue={animationStyle}
					onChange={handleAnimationStyleChange}
				/>
				<RadioInput
					name="animationStyle"
					value="animation3"
					currentValue={animationStyle}
					onChange={handleAnimationStyleChange}
				/>
				<RadioInput
					name="animationStyle"
					value="animation4"
					currentValue={animationStyle}
					onChange={handleAnimationStyleChange}
				/>
			</div>
		</div>
	);
};

export default ChooseAnimation;
