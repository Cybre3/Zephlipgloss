const NavIcon = (props) => {
  return (
    <div className="mt-2">
      <a href={props.linkTo} className="me-4 text-reset">
        <i className={props.class}></i>
      </a>
    </div>
  );
};

export default NavIcon;
