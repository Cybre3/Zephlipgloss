const FilterButton = (props) => {
    return (  
        <button
            type="button"
            className="btn toggle-btn"
            // eslint-disable-next-line jsx-a11y/aria-props
            aria-aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.category)}
        >
        <span className="visually-hidden">Show</span>
        <span>{props.category.replace("_", " ")}</span>
        <span className="visually-hidden">Tasks</span>
        </button>
    );
}
 
export default FilterButton;