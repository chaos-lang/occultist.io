const React = require('react')

import Head from 'next/head'

import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Spell from "../components/spell";

function Spells() {
    const { data } = useSWR("/api/spells", fetcher);
    const d = new Date();
    const currentYear = d.getFullYear();

    if (!data) return <div className="loading"><h3>Loading...</h3></div>;

    return (
        <div className="spells__container">
            <Head>
                <title>Occultist</title>
                <meta name="description" content="Dependency manager for the Chaos language" />
                <meta name="keywords" content="chaos,dependency,manager,spell,package,module,extension" />
                <meta name="author" content="Chaos Language Development Authority" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <div className="library_header_wrapper">
                <div className="library_header">
                </div>
            </div>

            <div className="library__container">
                <h1>
                    The Chaos Spell Index
                </h1>
                <div className="library__container__seach_notice_wrapper">
                    <em>Press</em> <kbd>G</kbd> <em>to search</em>
                </div>

                <div className="library__container__spell_list">
                    {data.map(result => (
                        <Spell name={result.name} repo={result.repo} installs={result.installs} />
                    ))}
                </div>
            </div>

            <footer>
                    <small>Copyright &copy; {currentYear} <strong>Chaos Language Development Authority</strong> -&nbsp;
                        <a href="https://github.com/chaos-lang/occultist.io/blob/master/pages/spells.js">
                            edit this page on GitHub
                        </a>
                    </small>
            </footer>
        </div>
    );
}

export default Spells;
