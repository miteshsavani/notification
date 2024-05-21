import NotificationBlock from './components/notificationBlock';

function App() {
	return (
		<div className="container">
			<NotificationBlock position="top-left"/>
			<NotificationBlock position="bottom-left"/>
			<NotificationBlock position="bottom-right"/>
			<NotificationBlock position="top-right"/>
		</div>
	);
}

export default App;
