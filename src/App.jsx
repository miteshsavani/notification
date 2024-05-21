import { useState } from 'react';
import NotificationBlock from './components/notificationBlock';
import AppContext from './context';

function App() {
	const [animationStyle, setAnimationStyle] = useState('animation1');

	const handleAnimationStyleChange = (e) => {
		console.log(e.target.value);
		setAnimationStyle(e.target.value);
	};

	return (
		<div className="container">
			<div className="animationBlock">
				<div>Choose animation style</div>
				<div className="radioArea">
					<div className="radioButton">
						<input
							type="radio"
							name="animationStyle"
							checked={animationStyle === 'animation1'}
							value="animation1"
							onChange={handleAnimationStyleChange}
						/>
						<label>Style 1</label>
					</div>
					<div className="radioButton">
						<input
							type="radio"
							name="animationStyle"
							checked={animationStyle === 'animation2'}
							value="animation2"
							onChange={handleAnimationStyleChange}
						/>
						<label>Style 2</label>
					</div>
					<div className="radioButton">
						<input
							type="radio"
							name="animationStyle"
							checked={animationStyle === 'animation3'}
							value="animation3"
							onChange={handleAnimationStyleChange}
						/>
						<label>Style 3</label>
					</div>
					<div className="radioButton">
						<input
							type="radio"
							name="animationStyle"
							checked={animationStyle === 'animation4'}
							value="animation4"
							onChange={handleAnimationStyleChange}
						/>
						<label>Style 4</label>
					</div>
				</div>
			</div>
			<AppContext value={animationStyle}>
				<div className="notificationBlockArea">
					<NotificationBlock position="top-left" />
					<NotificationBlock position="bottom-left" />
					<NotificationBlock position="bottom-right" />
					<NotificationBlock position="top-right" />
				</div>
			</AppContext>
		</div>
	);
}

export default App;
