import Head from 'next/head'

const React = require('react')
const ReactMarkdown = require('react-markdown')

export default class extends React.Component {
    static async getInitialProps({ req }) {
        const content = await require(`../md/home.md`)
        return { content }
    }

    render () {
        return (
        <div className="home__container">
            <Head>
                <title>Occultist</title>
                <meta name="description" content="Dependency manager for the Chaos language" />
                <meta name="keywords" content="chaos,dependency,manager,spell,package,module,extension" />
                <meta name="author" content="Chaos Language Development Authority" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <svg className="logo_svg" xmlns="http://www.w3.org/2000/svg" id="Layer_1_1_" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512">
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m50.836 51.459h-3.672l-6.507 1.627-8.657 7.914-8.657-7.914-6.507-1.627h-3.672l-4.341 10.541h46.354z" fill="#707070"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m23.343 53.086-6.507-1.627h-3.672l-1.603 3.892 4.894-.297 15.545 5.946z" fill="#616161"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m36 51 1 3 3.657-.914 8.343-2.086 12 3-3-4-9-3z" fill="#fdb62f"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m45 9-13-6-13 6-7 19 6 7 7.917 2.879 3.083 1.121h3 3l3.341-1.215 7.659-2.785 6-7z" fill="#707070"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m36 51-4-12-4 12-1 3-3.657-.914 8.657 7.914 8.657-7.914-3.657.914z" fill="#fdb62f"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m32 39 4 12 13-4 9 3-4.5-6c-2.833-3.777-7.279-6-12-6l-3.159-.215-3.341 1.215z" fill="#707070"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m28 51 4-12h-3l-3.083-1.121-3.417.121c-4.721 0-9.167 2.223-12 6l-4.5 6 9-3z" fill="#707070"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m47.164 51.459-6.507 1.627-8.657 7.914 15.312-6.107 5.486 1.331-1.962-4.765z" fill="#616161"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m23.343 53.086 3.657.914 1-3-13-4-9 3-3 4 12-3z" fill="#fdb62f"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m32 16-11 4.701v7.299l8 11h3 3l8-11v-7.345z" fill="#ffecc7"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m43 20.655-11-4.655-11 4.701v5.243c1.313-.114 2.817-.375 3.992-.944 2.652-1.286 4.438-6.054 6.973-5.973 2.535-.08 4.821 4.688 7.473 5.973 1.049.508 2.359.769 3.563.901v-5.246z" fill="#dbcbab"/>
                <g xmlns="http://www.w3.org/2000/svg" fill="#616161"><path className="logo_path" strokeDasharray="1200 1000" d="m46 35 6-7-7.098 3.5-9.902 7.5 3.341-1.215z"/><path className="logo_path" strokeDasharray="1200 1000" d="m12.205 28-.089.136 5.884 6.864 7.917 2.879 3.083 1.121h.205l-9.901-7.5z"/><path className="logo_path" strokeDasharray="1200 1000" d="m49.423 40.281c-2.35-1.463-5.083-2.281-7.923-2.281l-3.159-.215-3.341 1.215h-3l1.46 4.379 4.889-1.986s2.17-1.688 6.429-1.205c1.707.193 3.32.178 4.645.093z"/><path className="logo_path" strokeDasharray="1200 1000" d="m32 39h-3l-3.083-1.121-3.417.121c-2.839 0-5.57.817-7.919 2.278l.002.002c1.325.086 2.938.1 4.646-.093 4.259-.482 6.429 1.205 6.429 1.205l4.883 1.984z"/></g>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m3.243 54.97 8.242-2.061-3.586 8.71 1.85.762 4.148-10.074 1.103-.276 7.854 1.964 8.471 7.744c.191.174.433.261.675.261s.484-.087.675-.262l8.471-7.744 7.854-1.963 1.103.276 4.148 10.074 1.85-.762-3.586-8.71 8.242 2.061c.411.104.842-.064 1.076-.417s.221-.814-.033-1.153l-7.5-10c-2.681-3.575-6.78-5.852-11.141-6.302l3.183-1.158c.162-.059.306-.159.417-.289l6-7c.236-.275.304-.657.179-.997l-7-19c-.092-.249-.279-.451-.52-.563l-13-6c-.266-.122-.572-.122-.838 0l-13 6c-.241.111-.428.313-.52.563l-7 19c-.125.34-.057.721.179.997l6 7c.112.13.256.23.417.289l3.185 1.158c-4.389.464-8.469 2.739-11.141 6.302l-7.5 10c-.254.339-.268.801-.033 1.153.234.353.667.521 1.076.417zm28.757 4.675-5.106-4.668c.46.047.904-.211 1.055-.661l4.051-12.154 4.051 12.154c.139.416.527.684.949.684.031 0 .063-.009.094-.012zm-2.491-21.645-7.509-10.325v-6.301l10-4.286 10 4.286v6.301l-7.509 10.325zm19.734 12.03c-.159-.04-.326-.04-.485 0l-11.102 2.775-.384-1.151 11.716-3.605 8.4 2.8 1.122 1.497zm-7.743-11.03c4.383 0 8.57 2.093 11.2 5.6l2.579 3.439-5.963-1.988c-.197-.065-.411-.068-.61-.007l-12.066 3.713-3.252-9.757h1.612c.114 0 .23-.02.342-.06l3.143-1.143zm-28.359-11.205 6.654-18.061 12.205-5.632 12.205 5.633 6.654 18.061-5.447 6.355-7.678 2.792 6.075-8.354c.124-.172.191-.378.191-.589v-5.769l1.606.688.788-1.838-14-6c-.252-.108-.536-.108-.788 0l-14 6 .788 1.838 1.606-.688v5.769c0 .211.067.417.191.588l6.075 8.354-7.678-2.792zm-1.841 16.805c2.63-3.507 6.817-5.6 11.236-5.6l3.222-.114 2.9 1.055c.112.04.227.056.342.056v.003h1.612l-3.252 9.757-12.066-3.713c-.2-.062-.413-.06-.61.007l-5.963 1.988zm-4.688 6.25 8.4-2.8 11.716 3.605-.384 1.151-11.101-2.776c-.159-.04-.326-.04-.485 0l-9.268 2.317z"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m35.707 32.707 1-1-1.414-1.414-.707.707h-6.586v2h7c.265 0 .52-.105.707-.293z"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m36.804 23.98c.065.014.131.02.196.02.107 0 .214-.017.316-.051l3-1-.633-1.897-2.748.916-4.739-.948c-.13-.026-.263-.026-.393 0l-4.739.948-2.748-.916-.633 1.897 3 1c.165.055.34.065.513.032l4.804-.961z"/>
                <path className="logo_path" strokeDasharray="1200 1000" xmlns="http://www.w3.org/2000/svg" d="m31 26h2v3h-2z"/>
            </svg>

            <div id="home__console_text_animation" className="console_text_animation">
                <div className="console_text_animation__container">
                    <p className="console_text_animation__container__text">
                        occultist install
                    </p>

                    <ul className="console_text_animation__container__list">
                        <li className="console_text_animation__container__list__item">math</li>
                        <li className="console_text_animation__container__list__item">strlib</li>
                        <li className="console_text_animation__container__list__item">re</li>
                        <li className="console_text_animation__container__list__item">http</li>
                    </ul>
                </div>
            </div>
            <script src="js/random-package-name.js" type="application/javascript" />

            <br></br>
            <br></br>

            <div id="home__markdown__container">
                <ReactMarkdown source={this.props.content.default} />
            </div>

            <div className="curl_wrapper">
                <div className="curl">
                    <h3>Browse the Library</h3>
                </div>
            </div>

            <a href="https://github.com/chaos-lang/occultist" className="github-corner" ariaLabel="View source on GitHub">
                <svg width="120" height="120" viewBox="0 0 250 250" ariaHidden="true">
                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                    <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" className="octo-arm"></path>
                    <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
                </svg>
            </a>
        </div>
        )
    }
}
