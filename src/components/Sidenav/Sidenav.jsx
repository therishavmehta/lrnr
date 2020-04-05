import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import { RecursiveTreeView } from '../../components';

function Sidenav(props) {
    const {classes, open, handleChangeDrawer, showContent} = props;
    

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.toolbar} />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton ><AddIcon /></IconButton>
                <IconButton><ChevronLeftIcon onClick={handleChangeDrawer} /></IconButton>
            </div>
            <List style={{textAlign: 'left'}}>
                <RecursiveTreeView showContent={showContent}/>
            </List>
        </Drawer>
    );
}

export default Sidenav;
