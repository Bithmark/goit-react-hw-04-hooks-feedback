import css from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option) => (
    <div className={css.div}>
      <button
        type="button"
        className={css.btn}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    </div>
  ));
}

export default FeedbackOptions;
