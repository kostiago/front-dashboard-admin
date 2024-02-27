import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>LOGO</span>
      </div>

      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Marcos Altemiro</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
