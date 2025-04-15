import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
	const theme = useTheme();
	const [activeButton, setActiveButton] = useState('');
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const getButtonStyle = (route) => {
		if (!theme || !theme.palette || !theme.palette.primary) {
			return { color: 'blue' };
		}
		return {
			color: activeButton === route ? theme.palette.primary.main : theme.palette.default?.main || 'gray',
		};
	};

	const handleButtonClick = (route) => {
		setActiveButton(route);
		navigate(route);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		// يتم توجيه المستخدم إلى صفحة البحث مع النص المدخل في خانة البحث
		navigate(`/search?query=${e.target.value}`);
	};

	const navItems = [
		{ path: '/', label: 'Home' },
		{ path: '/pages', label: 'Pages' },
		{ path: '/products', label: 'Products' },
		{ path: '/faq', label: 'FAQ' },
		{ path: '/contact', label: 'Contact' },
		{ path: '/shop', label: 'Shop' },
		{ path: '/blog', label: 'Blog' },
	];

	const isMobile = useMediaQuery('(max-width: 600px)');
	const isLoggedIn = false;

	return (
		<Container>
			<AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', padding: '0' }}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
							Hekto
						</Typography>
					</Box>

					{/* Desktop Search Field with Search Icon */}

					{isMobile ? (
						<IconButton sx={{ color: '#757575' }} onClick={() => setDrawerOpen(true)}>
							<MenuIcon />
						</IconButton>
					) : (
						<Box sx={{ display: 'flex', gap: 3 }}>
							{navItems.map((item) => (
								<NavLink key={item.path} to={item.path} onClick={() => handleButtonClick(item.path)}>
									<Button sx={getButtonStyle(item.path)}>{item.label}</Button>
								</NavLink>
							))}

							{!isLoggedIn ? (
								<>
									{!isMobile && (
										<Box sx={{ display: 'flex', alignItems: 'center' }}>
											<TextField
												value={searchQuery}
												onChange={handleSearchChange}
												label="Search"
												variant="outlined"
												size="small"
												sx={{
													backgroundColor: '#f5f5f5',
													width: '100',
												}}
											/>
											<IconButton
												sx={{
													backgroundColor: '#f50057',
													color: 'white',
													borderRadius: '0%',
													padding: '8px',
												}}
											>
												<SearchIcon />
											</IconButton>
										</Box>
									)}
								</>
							) : (
								<Box sx={{ display: 'flex', gap: 2 }}>
									<IconButton sx={{ color: theme.palette.primary.main }} onClick={() => navigate('/settings')}>
										<SettingsIcon />
									</IconButton>
									<IconButton sx={{ color: theme.palette.primary.main }} onClick={() => navigate('/profile')}>
										<AccountCircleIcon />
									</IconButton>
								</Box>
							)}
						</Box>
					)}
				</Toolbar>
			</AppBar>

			<Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				<Box sx={{ width: 250, padding: 2 }}>
					{navItems.map((item) => (
						<Button
							key={item.path}
							sx={{ width: '100%', textAlign: 'left', marginBottom: 2 }}
							onClick={() => {
								handleButtonClick(item.path);
								setDrawerOpen(false);
							}}
						>
							{item.label}
						</Button>
					))}

					{!isLoggedIn ? (
						<>
							<Button
								variant="outlined"
								sx={{
									width: '100%',
									marginBottom: 2,
									color: theme.palette.primary.main,
									borderColor: theme.palette.primary.main,
								}}
								onClick={() => {
									navigate('/login');
									setDrawerOpen(false);
								}}
							>
								Log In
							</Button>
							<Button
								variant="contained"
								sx={{
									width: '100%',
									backgroundColor: theme.palette.primary.main,
									'&:hover': { backgroundColor: '#f4511e' },
								}}
								onClick={() => {
									navigate('/register');
									setDrawerOpen(false);
								}}
							>
								Create Account
							</Button>
						</>
					) : (
						<Box sx={{ display: 'flex', gap: 2 }}>
							<IconButton sx={{ color: theme.palette.primary.main }} onClick={() => navigate('/settings')}>
								<SettingsIcon />
							</IconButton>
							<IconButton sx={{ color: theme.palette.primary.main }} onClick={() => navigate('/profile')}>
								<AccountCircleIcon />
							</IconButton>
						</Box>
					)}
				</Box>
			</Drawer>
		</Container>
	);
};

export default Navbar;
