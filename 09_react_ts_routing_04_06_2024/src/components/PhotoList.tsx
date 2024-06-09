import { useEffect, useState } from "react";
import Photo from "./Photo";

interface IPhotoJSON {
    id: number;
    title: string;
    thumbnailUrl: string;
    url: string;
}

const PhotoList = () => {
    const [photos, setPhotos] = useState<IPhotoJSON[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(response => response.map((photo: IPhotoJSON) => ({
                id: photo.id,
                title: photo.title,
                url: photo.thumbnailUrl,
            })))
            .then(response => {
                setPhotos(response.slice(0, 20));
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });

        return () => console.log('Компонент размонтирован');
    }, []);

    if (isLoading) {
        return (
            <div className="d-flex flex-column align-items-center">
                {Array.from(new Array(20)).map((_, index) => (
                    <div key={index} className="card m-2" style={{ width: "18rem" }}>
                        <div className="card-img-top bg-secondary" style={{ height: "150px" }}></div>
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <h1 className='text-center'>Photos:</h1>
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
