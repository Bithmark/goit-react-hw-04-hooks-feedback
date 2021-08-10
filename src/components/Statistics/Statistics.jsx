import css from "./Statistics.module.css"

const Statistics = ({good, bad, neutral, positivePercentage}) => {
return (<ul className={css.ul}>
    <li className={css.li}>Good: {good}</li>
    <li className={css.li}>Neutral: {neutral}</li>
    <li className={css.li}>Bad: {bad}</li>
    <li className={css.li}>Total: {good+bad+neutral}</li>
    <li className={css.li}>Positive feedback: {positivePercentage}%</li>
</ul>)
}

export default Statistics;