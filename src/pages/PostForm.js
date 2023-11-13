import React from 'react';
import QuillEditor from '../components/QuillEditor';

const PostForm = () => {
    const handleImageUpload = async (imageFile) => {
        try {
            const formData = new FormData();
            formData.append('image', imageFile);

            // 서버로 이미지 업로드 요청
            const response = await fetch('YOUR_BACKEND_IMAGE_UPLOAD_ENDPOINT', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                return data.imageUrl; // 이미지 업로드 성공 시 이미지 URL 반환
            } else {
                throw new Error('Image upload failed');
            }
        } catch (error) {
            console.error('Image upload failed:', error);
            throw error;
        }
    };

    return (
        <div>
            <h2>이미지 업로드</h2>
            <QuillEditor onImageUpload={handleImageUpload} />
        </div>
    );
};

export default PostForm;
