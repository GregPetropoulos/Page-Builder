import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const fetchData = async () => {
	const { data } = await axios.get('/api/stats');
	return data;
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

export const Statistics = () => {
	const [stats, setStats] = useState({});
	const [chartData, setChartData] = useState({
		labels: [
			'Loading...',
			'Loading...',
			'Loading...',
			'Loading...',
			'Loading...',
			'Loading...',
		],
		datasets: [
			{
				label: 'Average pages per user',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(15, 37, 66, 1)',
				],
				borderWidth: 1,
			},
		],
	});

	useEffect(() => {
		fetchData().then(data => {
			setStats(data);
			setChartData(prev => ({
				...prev,
				labels: data.pagesStats.labels,
				datasets: [
					{
						...prev.datasets[0],
						data: data.pagesStats.averagePages,
					},
				],
			}));
		});
	}, [setStats, setChartData]);

	return (
		<div
			style={{
				minHeight: 100,
				margin: '0 auto',
				padding: 16,
				display: 'flex',
				flexDirection: 'column',
				height: '100vh'
			}}
		>
			<div
				style={{
					display: 'flex',
					gap: 16,
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						background: '#fff',
						maxWidth: 200,
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: 16,
						borderRadius: 4,
						boxShadow: 'box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)',
					}}
				>
					<span
						style={{
							fontSize: 18,
							fontWeight: 'bold',
						}}
					>
						Accounts Created
					</span>
					<span
						style={{
							fontSize: 17,
							color: '#0f2542',
						}}
					>
						{stats.accountsCreated
							? stats.accountsCreated
							: 'Loading...'}
					</span>
				</div>
				<div
					style={{
						background: '#fff',
						maxWidth: 200,
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: 16,
						borderRadius: 4,
						boxShadow: 'box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)',
					}}
				>
					<span
						style={{
							fontSize: 18,
							fontWeight: 'bold',
						}}
					>
						Pages Created
					</span>
					<span
						style={{
							fontSize: 17,
							color: '#0f2542',
						}}
					>
						{stats.pagesCreated ? stats.pagesCreated : 'Loading...'}
					</span>
				</div>
				<div
					style={{
						background: '#fff',
						maxWidth: 200,
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: 16,
						borderRadius: 4,
						boxShadow: 'box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)',
					}}
				>
					<span
						style={{
							fontSize: 18,
							fontWeight: 'bold',
						}}
					>
						Page Visits
					</span>
					<span
						style={{
							fontSize: 17,
							color: '#0f2542',
						}}
					>
						{stats.pageVisits >= 0
							? stats.pageVisits
							: 'Loading...'}
					</span>
				</div>
			</div>
			<div
				style={{
					width: 700,
					height: 300,
					margin: '64px auto',
				}}
			>
				<Bar
					data={chartData}
					options={options}
					width={700}
					height={300}
				/>
			</div>
		</div>
	);
};
