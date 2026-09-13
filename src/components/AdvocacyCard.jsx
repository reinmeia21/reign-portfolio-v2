export default function AdvocacyCard({ item, index }) {
  const headlineParts = item.highlightWord
    ? item.headline.split(new RegExp(`(${item.highlightWord})`, "i"))
    : [item.headline];

  return (
    <article className="advocacy-card" style={{ transform: `rotate(${(index % 2) * 2 - 1}deg)` }}>
      <div className="advocacy-card__index">{String(index + 1).padStart(2, "0")}</div>
      <div className="advocacy-card__content">
        <h3 className="advocacy-card__headline">
          {headlineParts.map((part, i) =>
            item.highlightWord && part.toLowerCase() === item.highlightWord.toLowerCase() ? (
              <span className="highlight" key={i}>{part}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h3>
        <span className="advocacy-card__role">{item.role}</span>
        <p className="advocacy-card__tagline">{item.tagline}</p>
        <p className="advocacy-card__copy">{item.copy}</p>
      </div>
    </article>
  );
}
