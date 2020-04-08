import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import DeskComponent from './components/DeskComponent'


const App = () => {
	return (
		<div className="content">
			<DeskComponent />
		</div>
	);
}

export default App;

