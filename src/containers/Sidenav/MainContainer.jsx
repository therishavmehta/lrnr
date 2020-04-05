import React, {useEffect} from 'react';
import clsx from 'clsx';
import {fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Navigationbar, Sidenav, Editor } from '../../components';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Divider } from '@material-ui/core';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        paddingTop: 50,
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        paddingTop: 50,
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
}));
const menuId = 'primary-search-account-menu';
export default function SideNav() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [topicContent, changeTopicContent] = React.useState(null);
    const [headingContent, changeHeadingContent] = React.useState(null);
    const [treeContent, changeTreeContent]  = React.useState(null);

    // useEffect(() => {
    //     const {topic='', heading=''} = treeContent;

    // }, [treeContent]);

    const handleChangeDrawer = () => {
        setOpen(open => !open);
    };
    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    const toggleDrawer = (anchor, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    };

    const showContent = (node) => {
        changeTreeContent(node);
    }

    const onEditorStateChange = (state, area) => {
        return area === 'topic' ? changeTopicContent(JSON.toString(state.topic)) : changeHeadingContent(JSON.toString(state.content));
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navigationbar classes={classes} handleChangeDrawer={handleChangeDrawer} open={open} handleProfileMenuOpen={handleProfileMenuOpen}
             toggleDrawer={toggleDrawer} menuId={menuId}/>
            <Sidenav classes={classes} open={open} handleChangeDrawer={handleChangeDrawer} showContent={showContent}/>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.toolbar} />
                <Typography paragraph>

        </Typography>
                {treeContent && treeContent.content && treeContent.topic ? <Typography paragraph>
                <Editor heading={'WYSIWYG Editor'} size={'h5'} value={treeContent && treeContent.content} onChange={(ev) => onEditorStateChange(ev, 'heading')}/>
                    <Divider />
                <Editor heading={'topic Content'} size={'h6'} value={treeContent && treeContent.topic} onChange={(ev) => onEditorStateChange(ev, 'topic')} />
            </Typography>: <Typography>Please select a leave node</Typography>}
            </main>
        </div>
    );
}
