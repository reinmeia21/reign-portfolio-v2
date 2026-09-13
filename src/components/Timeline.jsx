export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline__item" key={item.year}>
          <span className="timeline__year">{item.year}</span>
          <span className="timeline__label">{item.label}</span>
          <p className="timeline__detail">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
