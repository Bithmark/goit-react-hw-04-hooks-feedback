import css from "./Section.module.css"

const Section = ({children}) => {
    return (<div className={css.wrapper}>
        <div className={css.div}>
            {children}
        </div>
    </div>)
}

export default Section