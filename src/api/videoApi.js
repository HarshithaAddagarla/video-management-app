export const uploadVideo = async (file) => {
    const formData = new FormData();
    formData.append('video', file);

    const response = await fetch('/api/videos/upload', {
        method: 'POST',
        body: formData,
    });

    return response.json();
};

export const fetchVideos = async () => {
    const response = await fetch('/api/videos');
    return response.json();
};
