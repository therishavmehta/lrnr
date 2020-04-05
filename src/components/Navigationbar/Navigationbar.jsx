import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Menu, MenuItem, Divider } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

function Navigationbar(props) {
    const {classes, handleChangeDrawer, open, toggleDrawer, menuId} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ProfileMoreAnchorEl, setProfileMoreAnchorEl] = React.useState(null);

    const isProfileMenuOpen = Boolean(ProfileMoreAnchorEl);

    const handleProfileMenuClose = () => {
        setProfileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleProfileMenuClose();
    };

    const handleProfileMenuOpen = (event) => {
        setProfileMoreAnchorEl(ProfileMoreAnchorEl => !ProfileMoreAnchorEl ? event.currentTarget: null);
    };
    const ProfileMenuId = 'primary-search-account-menu-Profile';
    const renderProfileMenu = (
        <Menu
            anchorEl={ProfileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={ProfileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isProfileMenuOpen}
            onClose={handleProfileMenuClose}
        >
            <MenuItem>
                <p>Dark Mode</p>
                <Switch
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </MenuItem>
            <MenuItem>
                <p>Profile</p>
            </MenuItem>
            <Divider />
            <MenuItem >
                <p>What's new</p>
            </MenuItem>

            <MenuItem >
                <p>Help</p>
            </MenuItem>
            <MenuItem >
                <p>Send feedback</p>
            </MenuItem>
            <MenuItem >
                <p>Hints and Shortcut</p>
            </MenuItem>
            <Divider />
            <MenuItem >
                <p>Logout</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div >
        <AppBar color="transparent" position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleChangeDrawer}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Lrnr
          </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton color="inherit">
                        <Badge color="inherit">
                            <PersonAddIcon />
                            <Typography>
                                Invite member
                                </Typography>
                        </Badge>
                    </IconButton>
                    <IconButton color="white">
                        <Badge badgeContent={1} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
            <div style={{ display: 'flex', paddingBottom: '10px' }}>
                {['All', 'Board', 'Graph', 'Recent'].map(anchor => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    </React.Fragment>
                ))}
                <MoreVertIcon />
            </div>
        </AppBar>
        {renderProfileMenu}
        </div>
    );
}

export default Navigationbar;
