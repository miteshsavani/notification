import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Notification from '../components/notification';

const useNotification = () => {
	const [notification, showNotification] = useState(null);

	const timer = useRef(null);

	const triggerNotification = useCallback(({ type, message }) => {
		showNotification({ type, message });
		clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			showNotification(null);
		}, 2000);
	}, []);

	const onClose = useCallback(() => {
		showNotification(null);
	}, []);

	return [
		notification ? <Notification {...notification} onClose={onClose} /> : null,
		triggerNotification,
	];
};

export default useNotification;
