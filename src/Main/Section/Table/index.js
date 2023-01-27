import "./style.css";

export const Table = () => {
    return (
        <table className="table">
            <tr className="table__row">
                <th className="table__cell--header">Rok</th>
                <th className="table__cell--header">Album</th>
                <th className="table__cell--header">Certyfikat</th>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">1997</th>
                <td className="table__cell">Greatest Lovesongs Vol. 666</td>
                <td className="table__cell"><ul><li>FIN: platyna</li></ul></td>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">1999</th>
                <td className="table__cell">Razorblade Romance</td>
                <td className="table__cell">
                    <ul>
                        <li>FIN: 2xplatyna</li>
                        <li>EU: platyna</li>
                        <li>GER: platyna, 3xzłoto</li>
                        <li>AUT: złoto</li>
                        <li>POL: złoto</li>
                    </ul>
                </td>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">2001</th>
                <td className="table__cell">Deep Shadows and Brilliant Highlights</td>
                <td className="table__cell">
                    <ul>
                        <li>FIN: platyna</li>
                        <li>AUT: złoto</li>
                    </ul>
                </td>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">2003</th>
                <td className="table__cell">Love Metal</td>
                <td className="table__cell">
                    <ul>
                        <li>FIN: platyna</li>
                        <li>GER: złoto</li>
                    </ul>
                </td>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">2005</th>
                <td className="table__cell">Dark Light</td>
                <td className="table__cell">
                    <ul>
                        <li>FIN: platyna</li>
                        <li>GER: złoto</li>
                        <li>US: złoto</li>
                    </ul>
                </td>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">2007</th>
                <td className="table__cell">Venus Doom</td>
                <td className="table__cell"><ul><li>FIN: złoto</li></ul></td>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">2010</th>
                <td className="table__cell">Screamworks: Love In Theory And Practice</td>
                <td className="table__cell"><ul><li>FIN: złoto</li></ul></td>
            </tr>
            <tr className="table__row">
                <th className="table__cell--header">2013</th>
                <td className="table__cell">Tears on Tape</td>
                <td className="table__cell"><ul><li>Brak</li></ul></td>
            </tr>
        </table>
    );
};