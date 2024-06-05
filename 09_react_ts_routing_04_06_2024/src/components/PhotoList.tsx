import { useEffect, useState } from "react";
import Photo from "./Photo";

interface IPhotoJSON {
    id: number,
    title: string,
    url: string,
}

const PhotoList = () => {
    const [photos, setPhotos] = useState<IPhotoJSON[]>([]);
    //const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(response => response.map((photo: IPhotoJSON) => ({
                id: photo.id,
                title: photo.title,
                url: photo.url,
            })))
            .then(response => {
                setPhotos(response.slice(0, 10));
                // setLoading(false)
            })
            .catch(error => {
                console.log(error);
                // setLoading(false);
            });

        return () => console.log('Компонент размонтирован');
    }, []);


    // if (loading) {
    //     return (
    //         //отображения спинера
    //         <div className="spinner-border text-primary" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     );
    // }

    if (photos.length === 0) {
        return <div className="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
             </div>
    }


    return (
        <>
            <h1 className='text-center'>Photos:</h1>
            <div style={{ margin: '0 auto' }} className='w-50 d-flex'></div>
            <div className='text-center d-flex flex-column align-items-center'>
                {photos.map((photo) => (
                    <Photo
                        key={photo.id}
                        title={photo.title}
                        url={photo.url}
                    />
                ))}
            </div>
        </>
    );
}

export default PhotoList;
