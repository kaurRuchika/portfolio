import './Card.css';

export default function Card({id, name, description, image, liveUrl, liveUrl2, icons}) {       
    const assets = require.context('../../assets', true);

    return (
        <div id={id}>
            <div className="card-info">
                <h3>{name}</h3>
                <div className="card-icons-container">
                    {
                        icons.map((icon, i) => {
                            return (
                                <img key={i} src={assets(`./${icon.src}`).default} alt={icon.alt} title={icon.alt}  />
                            )
                        })
                    }
                </div>
                <p>{description}</p>
                {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noreferrer" className="card-button">
                    Live
                </a>
                )}   
                {liveUrl2 && (
                <a href={liveUrl2} target="_blank" rel="noreferrer" className="card-button">
                    Live
                </a>
                )}            
                </div>
        </div>
    )
}