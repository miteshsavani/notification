import { useCallback } from 'react';
import { useGetAnimation } from '../../context';
import useNotificationStack from '../../hooks/useNotificationStack';
import './style.css';

const notificationContainerStyle = {
	animation1: {
		'top-left': { 'flexDirection': 'column', top: '10px', left: '10px' },
		'bottom-left': {
			'flexDirection': 'column-reverse',
			bottom: '10px',
			left: '10px',
		},
		'top-right': { 'flexDirection': 'column', top: '10px', right: '10px' },
		'bottom-right': {
			'flexDirection': 'column-reverse',
			bottom: '10px',
			right: '10px',
		},
	},
	animation2: {
		'top-left': { 'flexDirection': 'column', top: '10px', left: '10px' },
		'bottom-left': {
			'flexDirection': 'column-reverse',
			bottom: '10px',
			left: '10px',
		},
		'top-right': { 'flexDirection': 'column', top: '10px', right: '10px' },
		'bottom-right': {
			'flexDirection': 'column-reverse',
			bottom: '10px',
			right: '10px',
		},
	},
	animation3: {
		'top-left': { 'flexDirection': 'column', top: '10px', left: '10px' },
		'bottom-left': {
			'flexDirection': 'column-reverse',
			bottom: '10px',
			left: '10px',
		},
		'top-right': { 'flexDirection': 'column', top: '10px', right: '10px' },
		'bottom-right': {
			'flexDirection': 'column-reverse',
			bottom: '10px',
			right: '10px',
		},
	},
	animation4: {
		'top-left': {
			'flexDirection': 'column-reverse',
			top: '10px',
			left: '10px',
		},
		'bottom-left': { 'flexDirection': 'column', bottom: '10px', left: '10px' },
		'top-right': {
			'flexDirection': 'column-reverse',
			top: '10px',
			right: '10px',
		},
		'bottom-right': {
			'flexDirection': 'column',
			bottom: '10px',
			right: '10px',
		},
	},
};

const NotificationBlock = ({ position }) => {
	const [notifications, triggerNotification] = useNotificationStack({
		position,
	});

	const { animationStyle } = useGetAnimation();

	const showSuccessMessage = useCallback(() => {
		triggerNotification({
			type: 'success',
			message: 'It is success message',
		});
	}, [triggerNotification]);

	const showErrorMessage = useCallback(() => {
		triggerNotification({
			type: 'error',
			message: 'It is error message',
		});
	}, [triggerNotification]);

	const showWarningMessage = useCallback(() => {
		triggerNotification({
			type: 'warning',
			message: 'It is warning message',
		});
	}, [triggerNotification]);

	const showInfoMessage = useCallback(() => {
		triggerNotification({
			type: 'info',
			message: 'It is info message',
		});
	}, [triggerNotification]);

	return (
		<div className="notificationBlock">
			<div
				className="notificationContainer"
				style={{ ...notificationContainerStyle[animationStyle][position] }}
			>
				{notifications}
			</div>
			<div className='heading2'>
				Show Notifications on{' '}
				{String(position).replace('-', ' ').toLocaleUpperCase()}
			</div>
			<div className="block">
				<button className="button" onClick={showSuccessMessage}>
					Success
				</button>
				<button className="button" onClick={showErrorMessage}>
					Error
				</button>
				<button className="button" onClick={showWarningMessage}>
					Warning
				</button>
				<button className="button" onClick={showInfoMessage}>
					Info
				</button>
			</div>
		</div>
	);
};

export default NotificationBlock;
