import c2 from "./nav.module.css"

const Nav = () => {
  return (
    <nav className={c2.nav}>
      <div className={c2.item}>
        <a >Profile</a>
      </div>
      <div className={`${c2.item} ${c2.active}`}>
        <a >Messages</a>
      </div>
      <div className={c2.item}>
        <a>News</a>
      </div>
      <div className={c2.item}>
        <a>Music</a>
      </div>
      <div className={c2.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Nav