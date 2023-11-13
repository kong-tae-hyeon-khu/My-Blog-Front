import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ onImageUpload }) => {
    const handleImage = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
                try {
                    const imageUrl = await onImageUpload(file);
                    const quill = document.querySelector('.quill-editor .ql-editor');

                    if (quill) {
                        const range = quill.getSelection();
                        const position = range ? range.index : quill.getLength();
                        quill.insertEmbed(position, 'image', imageUrl, 'user');
                    }
                } catch (error) {
                    console.error('Image upload failed:', error);
                }
            }
        };
    };


    const [content, setContent] = useState('');

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
            ],
            handlers: {
                image: handleImage,
            },
        },
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image',
    ];



    return (
        <div className="quill-editor">
            <ReactQuill
                value={content}
                onChange={(value) => setContent(value)}
                modules={modules}
                formats={formats}
                placeholder="내용을 작성하세요..."
            />
        </div>
    );
};

export default QuillEditor;
