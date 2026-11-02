function PollCard({ poll }) {
  return (
    <article className="poll-card">

      <div className="poll-card-header">
        <span className="poll-category">
          {poll.category}
        </span>

        <span className="poll-card-star" aria-hidden="true">
          ✧
        </span>
      </div>

      <h3>{poll.question}</h3>

      <div className="poll-card-divider" aria-hidden="true">
        <span>✧</span>
      </div>

      <div className="poll-options">
        {poll.options.map((option, index) => (
          <div
            className="poll-option"
            key={`${index}-${option}`}
          >
            <span className="option-number">
              0{index + 1}
            </span>

            <span className="option-text">
              {option}
            </span>

            <span className="option-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        ))}
      </div>

    </article>
  );
}

export default PollCard;