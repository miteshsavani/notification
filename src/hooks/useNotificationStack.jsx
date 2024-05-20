import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Notification from '../components/notification';
import { v4 as uuidv4 } from 'uuid';

const useNotificationStack = ({ duration = 5000 } = {}) => {
	const [notifications, setNotifications] = useState([]);

	const timer = useRef(null);

	const onClose = useCallback((id) => {
		setNotifications((current) =>
			current.map((notification) => {
				if (notification.id === id) {
					return { ...notification, visible: false };
				}
				return notification;
			})
		);
	}, []);

	const triggerNotification = useCallback(
		({ type, message }) => {
			const id = uuidv4();
			setNotifications((current) => [...current, { type, message, id }]);
			timer.current = setTimeout(
				(notificationId) => {
					onClose(notificationId);
				},
				duration,
				id
			);

			return () => {
				clearTimeout(timer.current);
			};
		},
		[duration, onClose]
	);

	const removeMe = useCallback((id) => {
		setNotifications((current) =>
			current.filter((notification) => notification.id !== id)
		);
	}, []);

	return [
		notifications.length
			? notifications.map((notification) => (
					<Notification
						key={notification.id}
						{...notification}
						duration={duration}
						onClose={() => onClose(notification.id)}
						removeMe={removeMe}
					/>
			  ))
			: null,
		triggerNotification,
	];
};

export default useNotificationStack;