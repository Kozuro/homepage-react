import "./style.css";

export const Section = () => {
    return (
        <>
            <section id="Wstep" className="section">
                <h2 className="section__header">Wstęp</h2>
                <p className="section__paragraph">
                    <span className="section__paragraph--important">HIM</span> - fiński zespół rockowy, założony w 1991 roku w Helsinkach przez wokalistę Ville Valo, gitarzystę Mikko Lindströma oraz basistę Mikko Paananena.
                    Muzycy stworzyli nowy rodzaj muzyki, określając ją jako love metal - głównie ze względu na teksty piosenek. Wśród inspiracji członków HIM, znajdują się zespoły Black Sabbath, Ozzy Osbourne, Iggy Pop, Ramones, Sisters Of Mercy, Pink Floyd, czy Type O Negative. Zespół wystąpił m.in. na festiwalach: duńskim Roskilde, niemieckich Rock Im Park i Rock am Ring, fińskich Ruisrock, Ilosaarirock i Provinssirock, a także na brytyjskim Download Festival. W marcu 2017 roku zespół ogłosił zakończenie trwającej 26 lat kariery, które poprzedzi trasa pożegnalna.
                </p>
            </section>
            <section id="Logo" className="section">
                <h2 className="section__header">Logo</h2>
                <p className="section__paragraph">
                    Logo zespołu jest heartagram, będący także znakiem towarowym. Kształtem przypomina gwiazdę pięcioramienną, jako że powstał z połączenia pentagramu oraz symbolu serca. Autor heartagramu, Ville Valo, twierdzi, że przedstawia on zarówno miłość, jak i śmierć - główne motywy tekstów HIM. „Jest to przedstawienie idealnej równowagi zachowanej pomiędzy miłością a śmiercią” - jak mawia lider grupy Ville.
                    Heartagramu - jako swojego logo - używa również amerykański skater Bam Margera, znajomy Ville Valo i gwiazda programu Jackass i Viva la Bam emitowanego w MTV.
                </p>
            </section>
            <section id="Muzycy" className="section">
                <h2 className="section__header">Muzycy</h2>
                <ul className="section__list"><span className="section__list--important">Ostatni skład zespołu</span>
                    <li className="section__list__item">Ville Valo - wokal prowadzący, gitara akustyczna (1991-2017)</li>
                    <li className="section__list__item">Mikko „Linde” Lindström – gitara prowadząca, gitara akustyczna (1991–2017)</li>
                    <li className="section__list__item">Mikko „Migé” Paananen – gitara basowa, wokal wspierający (1991–2017)</li>
                    <li className="section__list__item">Janne „Burton” Puurtinen – instrumenty klawiszowe, wokal wspierający (2001–2017)</li>
                    <li className="section__list__item">Jukka „Kosmo” Kröger – perkusja (2015–2017)</li>
                </ul>
                <ul className="section__list"><span className="section__list--important">Byli członkowie zespołu</span>
                    <li className="section__list__item">Juippi – perkusja (1991–1992)</li>
                    <li className="section__list__item">Juha Tarvonen – perkusja (1991–1992)</li>
                    <li className="section__list__item">Oki – gitara (1996)</li>
                    <li className="section__list__item">Antto Melasniemi – instrumenty klawiszowe (1995–1999)</li>
                    <li className="section__list__item">Juhana Tuomas „Pätkä” Rantala – perkusja (1995–1999)</li>
                    <li className="section__list__item">Sergei Ovalov – instrumenty klawiszowe (1999)</li>
                    <li className="section__list__item">Jussi-Mikko „Juska” Salminen – instrumenty klawiszowe (1999–2001)</li>
                    <li className="section__list__item">Mika „Gas Lipstick” Karppinen – perkusja (1999-2015)</li>
                </ul>
            </section>
        </>
    )
}