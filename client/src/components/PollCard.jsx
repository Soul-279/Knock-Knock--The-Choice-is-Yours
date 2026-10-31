function PollCard({ poll }) {
  return (
    <article className="poll-card">

      <div className="poll-card-header">
        <span className="poll-category">
          {poll.category}
        </span>

        <span className="poll-status">
          PREVIEW
        </span>
      </div>

      <h3>{poll.question}</h3>

      <div className="poll-options">
        {poll.options.map((option, index) => (
          <div className="poll-option" key={option}>
            <span className="option-number">
              0{index + 1}
            </span>

            <span>{option}</span>

            <span className="option-arrow">↗</span>
          </div>
        ))}
      </div>

      <div className="poll-card-footer">
        <span>{poll.votes} votes</span>
        <span>VOTING COMING SOON</span>
      </div>

    </article>
  );
}

export default PollCard;