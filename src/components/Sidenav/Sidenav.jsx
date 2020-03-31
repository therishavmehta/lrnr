import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import { RecursiveTreeView} from '../../components';

function Sidenav(props) {
    const {classes, open, handleChangeDrawer} = props;
    

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            open={open}
            classes={{
                paper: classes.drawerPaper, open
            }}
        >
            <div className={classes.toolbar} />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton ><AddIcon /></IconButton>
                <IconButton><ChevronLeftIcon onClick={handleChangeDrawer} /></IconButton>
            </div>
            <List style={{textAlign: 'left'}}>
                <RecursiveTreeView />
            </List>
        </Drawer>
    );
}

export default Sidenav;
