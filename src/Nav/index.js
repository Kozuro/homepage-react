import "./style.css";

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a className="nav__link" href="#Wstep">Wstęp</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#Logo">Logo</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#Muzycy">Muzycy</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#Dyskografia">Dyskografia</a>
                </li>
            </ul>
        </nav>
    )
}