import './CoreConcept.css';

export default function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} className="core-img" />
        <h3 className="core-name">{title}</h3>
        <p className="core-con">{description}</p>
      </li>
    );
  }