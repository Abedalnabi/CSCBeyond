import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	Container,
	IconButton,
	Drawer,
	TextField,
	MenuItem,
	Select,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Mail, Phone, Favorite, ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
	const theme = useTheme();
	const [activeButton, setActiveButton] = useState('');
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const getButtonStyle = (route) => ({
		color: activeButton === route ? theme.palette.primary.main : 'gray',
	});

	const handleButtonClick = (route) => {
		setActiveButton(route);
		navigate(route);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		navigate(`/search?query=${e.target.value}`);
	};

	const navItems = [
		{ path: '/', label: 'Home' },
		{ path: '/pages', label: 'Pages' },
		{ path: '/products', label: 'Products' },
		{ path: '/faq', label: 'FAQ' },
		{ path: '/contact-us', label: 'Contact' },
		{ path: '/shop', label: 'Shop' },
		{ path: '/about-us', label: 'About' },
	];

	const isMobile = useMediaQuery('(max-width: 600px)');
	const isLoggedIn = false;

	return (
		<div>
			<AppBar position="sticky" sx={{ backgroundColor: '#6a4cfc' }}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					{/* Left side: Contact Information */}
					<Box display="flex" alignItems="center">
						<Mail sx={{ marginRight: 1 }} />
						<Typography variant="body2" sx={{ color: 'white' }}>
							mhkhasanul@gmail.com
						</Typography>
						{!isMobile && <Phone sx={{ marginLeft: 3, marginRight: 1 }} />}
						{!isMobile && (
							<Typography variant="body2" sx={{ color: 'white' }}>
								(12345) 67890
							</Typography>
						)}
					</Box>

					{/* Right side: Language, Currency, Login, Wishlist, Cart */}
					<Box display="flex" alignItems="center">
						{!isMobile && (
							<>
								<Select
									value="English"
									sx={{
										color: 'white',
										fontSize: '14px',
										marginRight: 2,
										border: 'none',
										boxShadow: 'none',
										'& .MuiOutlinedInput-notchedOutline': {
											border: 'none',
										},
									}}
								>
									<MenuItem value="English">English</MenuItem>
									<MenuItem value="Spanish">Spanish</MenuItem>
									<MenuItem value="French">French</MenuItem>
								</Select>
								<Select
									value="USD"
									sx={{
										color: 'white',
										fontSize: '14px',
										marginRight: 2,
										'& .MuiOutlinedInput-notchedOutline': {
											border: 'none',
										},
									}}
								>
									<MenuItem value="USD">USD</MenuItem>
									<MenuItem value="EUR">EUR</MenuItem>
									<MenuItem value="INR">INR</MenuItem>
								</Select>
							</>
						)}
						{!isMobile && (
							<Button color="inherit" sx={{ marginRight: 2, fontSize: '14px' }} onClick={() => navigate('/login')}>
								Login
							</Button>
						)}
						{/* TODO: AppRoutes.Route insted of static */}
						<IconButton color="inherit" sx={{ marginRight: 2 }} onClick={() => navigate('/wishlist')}>
							<Favorite />
						</IconButton>
						<IconButton color="inherit" onClick={() => navigate('/cart')}>
							<ShoppingCart />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			<Container>
				<AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', padding: '0' }}>
					<Toolbar sx={{ display: 'flex', justifyContent: isMobile ? 'space-between' : 'space-around' }}>
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
										<Box sx={{ display: 'flex', alignItems: 'center' }}>
											<TextField
												value={searchQuery}
												onChange={handleSearchChange}
												label="Search"
												variant="outlined"
												size="small"
												sx={{ backgroundColor: '#f5f5f5', width: '100' }}
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
									</>
								) : (
									<Box sx={{ display: 'flex', gap: 2 }}>
										<IconButton
											sx={{ color: theme.palette.primary.main }}
											onClick={() => navigate('/settings')}
										>
											<SettingsIcon />
										</IconButton>
										<IconButton
											sx={{ color: theme.palette.primary.main }}
											onClick={() => navigate('/profile')}
										>
											<AccountCircleIcon />
										</IconButton>
									</Box>
								)}
							</Box>
						)}
					</Toolbar>
				</AppBar>
			</Container>

			<Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				<Box sx={{ width: 250, padding: 2 }}>
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							onClick={() => {
								handleButtonClick(item.path);
								setDrawerOpen(false);
							}}
						>
							<Button sx={{ width: '100%', textAlign: 'left', marginBottom: 2 }}>{item.label}</Button>
						</NavLink>
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
		</div>
	);
};

export default Navbar;
