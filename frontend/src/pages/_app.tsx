import { appWithTranslation, } from "next-i18next"
import { AppProps, } from "next/app"
import { NextPage, } from "next"
import { ComponentType, ReactElement, ReactNode, } from "react"
import "styles/globals.css"

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps, }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default appWithTranslation(MyApp as ComponentType<AppProps>)