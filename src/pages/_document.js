import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Alvaro Torres - Back-end Developer" />
          <meta name="description" content="Hey there, This is Alvaro Torres Carrasco. I am a Back-end Developer, specialized in Django and NodeJs based in Spain." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Alvaro Torres - Back-end Developer" />
          <meta property="og:description" content="Hey there, This is Alvaro Torres Carrasco. I am a Back-end Developer, specialized in Django and NodeJs based in Spain." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
