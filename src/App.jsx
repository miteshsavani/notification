import ChooseAnimation from './components/chooseAnimation';
import NotificationBlock from './components/notificationBlock';
import AppContext from './context';

function App() {
	return (
		<AppContext>
			<div className="container">
				<ChooseAnimation />
				<div className="notificationBlockArea">
					<NotificationBlock position="top-left" />
					<NotificationBlock position="top-right" />
					<NotificationBlock position="bottom-left" />
					<NotificationBlock position="bottom-right" />
				</div>
			</div>
		</AppContext>
	);
}

export default App;
