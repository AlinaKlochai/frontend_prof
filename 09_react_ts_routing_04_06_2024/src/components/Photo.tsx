interface PhotoProps {
    title: string,
    url: string,
}

const Photo = ({ title, url }: PhotoProps) => {
    return (
        <div className="photo-item">
            <h3>{title}</h3>
            <img src={url} alt={title} />
        </div>
    );
}

export default Photo;
