import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';


const data = {
    id: 'root',
    name: 'Parent',
    children: [
        {
            id: '1',
            name: 'Child - 1',
        },
        {
            id: '3',
            name: 'Child - 3',
            children: [
                {
                    id: '4',
                    name: 'Child - 4',
                },
            ],
        },
    ],
};

const useStyles = makeStyles({
    root: {
        height: 110,
        flexGrow: 1,
        maxWidth: 400,
    },
});

function RecursiveTreeView() {
    const classes = useStyles();

    const renderTree = (nodes) => (
        <TreeItem style={{height: '24px'}} key={nodes.id} nodeId={nodes.id} label={
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <Typography align='center'>{nodes.name}</Typography>
                {nodes.hasOwnProperty('children') && <div>
                <IconButton >
                    <LibraryAddIcon />
                </IconButton>
                <IconButton >
                    <AddIcon />
                </IconButton>
            </div>}
                </div>}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {renderTree(data)}
        </TreeView>
    );
}

export default RecursiveTreeView;
