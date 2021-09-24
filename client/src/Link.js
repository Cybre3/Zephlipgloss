const Link = ({numbers}) => {
    return (
    numbers.map((number) => (
        <li className="listItem" key={number}>
            <a href="/">Going to {number}</a>
        </li>
    )));
}
 
export default Link;