import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillWarning } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useAppContext } from '../../context';

import './style.css';

const notificationIcon = {
	success: <AiOutlineCheck style={{ marginRight: '10px' }} />,
	error: <AiOutlineMinusCircle style={{ marginRight: '10px' }} />,
	warning: <AiFillWarning style={{ marginRight: '10px' }} />,
	info: <AiFillInfoCircle style={{ marginRight: '10px' }} />,
};

const noticationMountStyle = {
	animation1: {
		'top-left': { top: '100vh' },
		'bottom-left': { bottom: '100vh' },
		'top-right': { top: '100vh' },
		'bottom-right': { bottom: '100vh' },
	},
	animation2: {
		'top-left': { left: '-300px' },
		'bottom-left': { left: '-300px' },
		'top-right': { right: '-300px' },
		'bottom-right': { right: '-300vh' },
	},
	animation3: {
		'top-left': { opacity: 0 },
		'bottom-left': { opacity: 0 },
		'top-right': { opacity: 0 },
		'bottom-right': { opacity: 0 },
	},
	animation4: {
		'top-left': { top: '100vh' },
		'bottom-left': { bottom: '100vh' },
		'top-right': { top: '100vh' },
		'bottom-right': { bottom: '100vh' },
	},
};

const notificationStyle = {
	animation1: {
		whenVisible: {
			'top-left': { top: '0px' },
			'bottom-left': { bottom: '0px' },
			'top-right': { top: '0px' },
			'bottom-right': { bottom: '0px' },
		},
		whenNotVisible: {
			'top-left': { top: '-500px' },
			'bottom-left': { bottom: '-500px' },
			'top-right': { top: '-500px' },
			'bottom-right': { bottom: '-500px' },
		},
	},
	animation2: {
		whenVisible: {
			'top-left': { left: '10px' },
			'bottom-left': { left: '10px' },
			'top-right': { right: '10px' },
			'bottom-right': { right: '10px' },
		},
		whenNotVisible: {
			'top-left': { left: '-300px' },
			'bottom-left': { bottom: '-300px' },
			'top-right': { right: '-300px' },
			'bottom-right': { right: '-300px' },
		},
	},
	animation3: {
		whenVisible: {
			'top-left': { opacity: 1 },
			'bottom-left': { opacity: 1 },
			'top-right': { opacity: 1 },
			'bottom-right': { opacity: 1 },
		},
		whenNotVisible: {
			'top-left': { opacity: 0 },
			'bottom-left': { opacity: 0 },
			'top-right': { opacity: 0 },
			'bottom-right': { opacity: 0 },
		},
	},
	animation4: {
		whenVisible: {
			'top-left': { top: '0px' },
			'bottom-left': { bottom: '0px' },
			'top-right': { top: '0px' },
			'bottom-right': { bottom: '0px' },
		},
		whenNotVisible: {
			'top-left': { top: '-500px' },
			'bottom-left': { bottom: '-500px' },
			'top-right': { top: '-500px' },
			'bottom-right': { bottom: '-500px' },
		},
	},
};

const ProgressBar = ({ duration }) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setWidth(100);
		}, 50);
	}, []);

	return (
		<div
			className="progressBar"
			style={{ width: `${width}%`, transition: `width ${duration}s` }}
		></div>
	);
};

const Notification = ({
	id,
	type,
	message,
	onClose,
	duration,
	visible = true,
	removeMe,
	position,
}) => {
	const [transitionStyle, setTransitionStyle] = useState({});
	const animationStyle = useAppContext();

	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				setTransitionStyle(
					notificationStyle[animationStyle].whenVisible[position]
				);
			}, 50);
		} else {
			setTransitionStyle(
				notificationStyle[animationStyle].whenNotVisible[position]
			);
			setTimeout(() => {
				removeMe(id);
			}, 1000);
		}
	}, [visible, removeMe, id, position, animationStyle]);

	return (
		<div
			className={`notification ${type}`}
			style={{
				transition: 'all 1s',
				...noticationMountStyle[animationStyle][position],
				...transitionStyle,
			}}
		>
			{/** Icon */}
			{notificationIcon[type]}
			{/** Message */}
			<div>{message}</div>

			{/** Close button */}
			<AiOutlineClose className="closeIcon" onClick={onClose} />
			{/** progress bar */}
			<ProgressBar duration={duration / 1000} />
		</div>
	);
};

export default Notification;
