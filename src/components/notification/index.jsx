import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillWarning } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

import './style.css';

const notificationIcon = {
	success: <AiOutlineCheck style={{ marginRight: '10px' }} />,
	error: <AiOutlineMinusCircle style={{ marginRight: '10px' }} />,
	warning: <AiFillWarning style={{ marginRight: '10px' }} />,
	info: <AiFillInfoCircle style={{ marginRight: '10px' }} />,
};

const notificationStyle = {
	whenVisible: {
		'top-left': { top: '0px' },
		'bottom-left': { bottom: '0px' },
		'top-right': { top: '0px' },
		'bottom-right': { bottom: '0px' }
	},
	whenNotVisible: {
		'top-left': { top: '-500px' },
		'bottom-left': { bottom: '-500px' },
		'top-right': { top: '-500px' },
		'bottom-right': { bottom: '-500px' }
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

	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				setTransitionStyle(notificationStyle.whenVisible[position]);
			}, 50);
		} else {
			setTransitionStyle(notificationStyle.whenNotVisible[position]);
			setTimeout(() => {
				removeMe(id);
			}, 1000);
		}
	}, [visible, removeMe, id, position]);

	return (
		<div
			className={`notification ${type} ${position}-notification`}
			style={{ transition: 'all 1s', ...transitionStyle }}
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
