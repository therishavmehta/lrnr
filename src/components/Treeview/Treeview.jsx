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
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            topic: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        },
        {
            id: '3',
            name: 'Child - 3',
            children: [
                {
                    id: '4',
                    name: 'Child - 4',
                    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
                    topic: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
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

function RecursiveTreeView(props) {
    const {showContent} = props;
    const [treeData, changeTreeData] = React.useState(data);
    const classes = useStyles();
    const addLibrary = (node) => {
        // node.push({id: '10', name: 'fsfsdf', children: []});
    }
    const addChildren = (node, name) => {
        console.log(node);
        // node.push({id: name, name, topic: '', content: ''});
    }
    const sendContent = (node) => {
        if(!Array.isArray(node)) {
            showContent(node);
        }
    }

    const renderTree = (nodes) => (
        <TreeItem onClick={() => sendContent(nodes)} style={{height: '24px'}} key={nodes.id} nodeId={nodes.id} label={
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <Typography align='center'>{nodes.name}</Typography>
                {nodes.hasOwnProperty('children') && <div>
                <IconButton onClick={() => addLibrary(nodes)}>
                    <LibraryAddIcon />
                </IconButton>
                    <IconButton onClick={() => addChildren(nodes)}>
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
            {renderTree(treeData)}
        </TreeView>
    );
}

export default RecursiveTreeView;
