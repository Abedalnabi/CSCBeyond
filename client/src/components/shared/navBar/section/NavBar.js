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
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Mail, Phone, Favorite, ShoppingCart } from '@mui/icons-material';
import { navbarStyles } from './style';
import { staticText } from './staticText';
import userContext from '../../../../contextApi/contexts/UserContext';

// TODO: Seperate this comp to small pices
const Navbar = () => {
	const { isAuthenticated, logout, userInfo } = userContext();

	const [activeButton, setActiveButton] = useState('');
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const isLoggedIn = isAuthenticated;

	console.log('isLoggedIn', isLoggedIn);
	const getButtonStyle = (route) => navbarStyles.buttonStyle(route, activeButton);
	const handleButtonClick = (route) => {
		setActiveButton(route);
		navigate(route);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		navigate(`/search?query=${e.target.value}`);
	};

	const navItems = [
		{ path: '/', label: staticText.navbar.home },
		{ path: '/pages', label: staticText.navbar.pages },
		{ path: '/products', label: staticText.navbar.products },
		{ path: '/faq', label: staticText.navbar.faq },
		{ path: '/contact-us', label: staticText.navbar.contact },
		{ path: '/shop', label: staticText.navbar.shop },
		{ path: '/about-us', label: staticText.navbar.about },
	];

	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<div>
			<AppBar position="sticky" sx={navbarStyles.appBar}>
				<Toolbar sx={navbarStyles.toolbar}>
					<Box sx={navbarStyles.contactBox}>
						<Mail sx={{ marginRight: 1 }} />
						<Typography variant="body2" sx={navbarStyles.contactText}>
							{userInfo?.email || staticText.contactInfo.email}
						</Typography>
						{!isMobile && <Phone sx={{ marginLeft: 3, marginRight: 1 }} />}
						{!isMobile && (
							<Typography variant="body2" sx={navbarStyles.contactText}>
								{staticText.contactInfo.phone}
							</Typography>
						)}
					</Box>
					<Box sx={navbarStyles.rightBox}>
						{!isMobile && (
							<>
								<Select value="English" sx={navbarStyles.select}>
									{staticText.selectOptions.language.map((lang) => (
										<MenuItem key={lang} value={lang}>
											{lang}
										</MenuItem>
									))}
								</Select>
								<Select value="USD" sx={navbarStyles.select}>
									{staticText.selectOptions.currency.map((curr) => (
										<MenuItem key={curr} value={curr}>
											{curr}
										</MenuItem>
									))}
								</Select>
							</>
						)}
						{!isLoggedIn && !isMobile && (
							<Button color="inherit" sx={{ marginRight: 2, fontSize: '14px' }} onClick={() => navigate('/login')}>
								{staticText.navbar.login}
							</Button>
						)}
						{isLoggedIn && !isMobile && (
							<Button color="inherit" sx={{ marginRight: 2, fontSize: '14px' }} onClick={() => logout()}>
								{staticText.navbar.logout}
							</Button>
						)}
						{isLoggedIn && (
							<IconButton color="inherit" sx={{ marginRight: 2 }} onClick={() => navigate('/accout')}>
								<AccountCircleIcon />
							</IconButton>
						)}
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
						{isMobile ? (
							<IconButton sx={{ color: '#757575' }} onClick={() => setDrawerOpen(true)}>
								<MenuIcon />
							</IconButton>
						) : (
							<Box sx={navbarStyles.inputBox}>
								{navItems.map((item) => (
									<NavLink key={item.path} to={item.path} onClick={() => handleButtonClick(item.path)}>
										<Button sx={getButtonStyle(item.path)}>{item.label}</Button>
									</NavLink>
								))}
								<Box sx={navbarStyles.inputBox}>
									<TextField
										value={searchQuery}
										onChange={handleSearchChange}
										label={staticText.navbar.search}
										variant="outlined"
										size="small"
										sx={{ backgroundColor: '#f5f5f5', width: '100' }}
									/>
									<IconButton sx={navbarStyles.iconButtonStyle}>
										<SearchIcon />
									</IconButton>
								</Box>
							</Box>
						)}
					</Toolbar>
				</AppBar>
			</Container>

			<Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				<Box sx={navbarStyles.drawerBox}>
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							onClick={() => {
								handleButtonClick(item.path);
								setDrawerOpen(false);
							}}
						>
							<Button sx={navbarStyles.buttonFullWidth}>{item.label}</Button>
						</NavLink>
					))}
					{!isLoggedIn ? (
						<>
							<Button
								variant="outlined"
								sx={{ width: '100%', marginBottom: 2, color: '#6a4cfc', borderColor: '#6a4cfc' }}
								onClick={() => {
									navigate('/login');
									setDrawerOpen(false);
								}}
							>
								{staticText.navbar.login}
							</Button>
							<Button
								variant="contained"
								sx={{ width: '100%', backgroundColor: '#6a4cfc', '&:hover': { backgroundColor: '#f4511e' } }}
								onClick={() => {
									navigate('/register');
									setDrawerOpen(false);
								}}
							>
								{staticText.navbar.createAccount}
							</Button>
						</>
					) : (
						<Box sx={{ display: 'flex', gap: 2 }}>
							<IconButton sx={{ color: '#6a4cfc' }} onClick={() => navigate('/settings')}>
								<SettingsIcon />
							</IconButton>
							<IconButton sx={{ color: '#6a4cfc' }} onClick={() => navigate('/profile')}>
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
