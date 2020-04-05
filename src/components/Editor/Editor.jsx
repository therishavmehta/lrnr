import React, {useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'; 
import { Typography } from '@material-ui/core';

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { editorHtml: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.value !== this.props.value) {
            this.setState({editorHtml: this.props.value});
        }
    }

    handleChange(html) {
        this.props.onChange(html);
    }

    render() {
        return (
            <div>
                <Typography align='left' variant={this.props.size}>{this.props.heading}</Typography>
                <ReactQuill
                    theme={'bubble'}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                />
            </div>
        )
    }
}

Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
}

Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

export default Editor;

