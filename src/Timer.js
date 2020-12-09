import './Timer.scss';
import { useEffect, useState } from 'react';

const Timer = () => {
	const [ dateNow, setDateNow ] = useState(new Date());

	const nextYear = dateNow.getFullYear() + 1;
	const newYearDate = new Date(nextYear, 0, 1);
	const delta = newYearDate - dateNow;
	const days = Math.trunc(delta / (1000 * 60 * 60 * 24));
	const hours = Math.trunc(delta / (1000 * 60 * 60) % 24);
	const minutes = Math.trunc(delta / (1000 * 60) % 60);
	const seconds = Math.trunc(delta / 1000 % 60);

	function updateTimer() {
		setDateNow(new Date());
	}
	
	
	useEffect(() => {
		const timerId = setInterval(updateTimer, 1000);

		return () => clearInterval(timerId);
	}, []);

	const format = num => {
		if (num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	};

	return (
		<div className="timer">
			<p>
				Now { dateNow.toLocaleString() }
			</p>
			<div className="timer__block">
				<h2 className="timer__title">
					Until the New Year
				</h2>
				<div className="timer_tablo">
					<div className="timer__days timer__card">
						<p className="timer__number">
							{ format(days) }
						</p>
						<p className="timer__name">
							days
						</p>
					</div>
					<div className="timer__hours timer__card">
						<p className="timer__number">
							{ format(hours) }
						</p>
						<p className="timer__name">
							hours
						</p>
					</div>
					<div className="timer__minutes timer__card">
						<p className="timer__number">
							{ format(minutes) }
						</p>
						<p className="timer__name">
							min
						</p>
					</div>
					<div className="timer__seconds timer__card">
						<p className="timer__number">
							{ format(seconds) }
						</p>
						<p className="timer__name">
							sec
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Timer;