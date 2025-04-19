import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import styles from './style';
import STATIC_TEXT from './staticText';
import AppRoutes from '../../../../config/appRoutes';
import ClockImg from '../../assets/img/clock.png';
import CheckList from '../../assets/img/checklist 1.png';
import FotImg from '../../assets/img/image 1174.png';

const OrderCompleted = () => {
	const navigate = useNavigate();

	return (
		<div
		// sx={styles.container}
		>
			<Box
				sx={{
					position: 'relative',
					width: '1200px',
					height: '400px',
					marginTop: '60px',
					margin: 'auto',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						borderLeft: '1px dashed gray',
						top: 5,
						left: '39px',
						width: '100%',
						height: '100%',
					}}
				></Box>
				<Box
					sx={{
						position: 'absolute',
						borderBottom: '1px dashed gray',
						top: 5,
						left: '39px',
						width: '100%',
						height: '100%',
					}}
				></Box>
				<Box
					sx={{
						position: 'absolute',
						width: '80px',
						height: '80px',
						top: 0,
						left: '0',
					}}
				>
					<img src={ClockImg} alt="Clock" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
				</Box>

				<Box
					sx={{
						position: 'absolute',
						width: '80px',
						height: '80px',
						bottom: '-34px',
						right: 0,
					}}
				>
					<img src={CheckList} alt="checkList" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
				</Box>

				<Box
					sx={{
						width: '700px',
						margin: 'auto',
					}}
				>
					<Box sx={styles.iconBox}>
						<CheckCircleIcon sx={styles.icon} />
					</Box>

					<Typography variant="h4" sx={styles.title}>
						{STATIC_TEXT.TITLE}
					</Typography>

					<Typography variant="body1" sx={styles.subtitle}>
						{STATIC_TEXT.DESCRIPTION}
					</Typography>

					<Button variant="contained" color="primary" sx={styles.button} onClick={() => navigate(AppRoutes.PRODUCTS)}>
						{STATIC_TEXT.BUTTON}
					</Button>
				</Box>
			</Box>

			<Container>
				<Box
					sx={{
						width: '100%',
						height: '80px',
						margin: 'auto',
						marginTop: '120px',
						marginBottom: '150px',
					}}
				>
					<img src={FotImg} alt="Clock" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
				</Box>
			</Container>
		</div>
	);
};

export default OrderCompleted;
