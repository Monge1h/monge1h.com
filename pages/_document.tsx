import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

interface DocumentProps {
  pathname: string
}

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, pathname: ctx.pathname }
  }

  render() {
    const lang = this.props.pathname?.startsWith('/es') ? 'es' : 'en'
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
