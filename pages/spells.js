import Head from 'next/head'

const React = require('react')

export default class extends React.Component {
    render () {
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
            </div>

            <br></br>
            <br></br>
            <br></br>
            <footer>
                    <small>Copyright &copy; {this.props.currentYear} <strong>Chaos Language Development Authority</strong> -&nbsp;
                        <a href="https://github.com/chaos-lang/occultist.io/blob/master/pages/index.js">
                            edit this page on GitHub
                        </a>
                    </small>
            </footer>
        </div>
        )
    }
}
