import { useCallback } from 'react';
import useNotificationStack from '../../hooks/useNotificationStack';
import "./style.css";

const NotificationBlock = ({ position }) => {
	const [notifications, triggerNotification] = useNotificationStack({
		position,
	});

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
		<div className='notificationBlock'>
			<div className={`notificationContainer ${position}`}>{notifications}</div>
			<p>Show Notifications on {String(position).replace('-', ' ').toLocaleUpperCase()} corner</p>
			<div className="block">
				<button className="button" onClick={showSuccessMessage}>
					Show Success
				</button>
				<button className="button" onClick={showErrorMessage}>
					Show Error
				</button>
				<button className="button" onClick={showWarningMessage}>
					Show Warning
				</button>
				<button className="button" onClick={showInfoMessage}>
					Show Info
				</button>
			</div>
		</div>
	);
};

export default NotificationBlock;
