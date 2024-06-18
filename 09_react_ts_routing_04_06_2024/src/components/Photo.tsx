interface PhotoProps {
    title: string,
    url: string,
}

const Photo = ({ title, url }: PhotoProps) => {
    return (
        <div className="border border-primary-subtle w-50 my-2 p-2 photo-item photo-container">
            <h3>{title}</h3>
            <img src={url} alt={title} />
        </div>
    );
}

export default Photo;
