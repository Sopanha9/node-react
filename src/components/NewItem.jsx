function NewItem({ image, title, date, desc }) {
  return (
    <div className="news-card">
      <div className="news-image-container">
        <img src={image} alt={title} className="news-img" />
      </div>
      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-date">{date}</p>
        <p className="news-description">{desc}</p>
      </div>
    </div>
  );
}

export default NewItem;