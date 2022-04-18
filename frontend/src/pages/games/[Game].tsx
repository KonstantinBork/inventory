import { GetServerSideProps, InferGetServerSidePropsType, } from "next"
import { getMedia, } from "services/media/getMedia"
import { MediaType, } from "types/MediaType"
import { VideogameResponse, } from "types/response/VideogameResponse"
import { serverSideTranslations, } from "next-i18next/serverSideTranslations"
import Main from "../../layouts/main"
import { Platform, } from "../../types/Platform"
import Image from "next/image"
import { ReactElement, } from "react"
import Title from "../../blocks/title";
import Infobox from "../../blocks/infoBox";

const Game = ({ foundGame, }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const platforms: Platform[] = foundGame.platforms

    return (
        <>
            <Title titleName={foundGame.name} />
            <div className="content mx-2 lg:mx-4">
                <Infobox info={platforms} />
                <div className="float-right ml-2 lg:ml-4">
                    <Image
                        src={foundGame.image_url}
                        height={200}
                        width={200}
                        objectFit="contain"
                        alt={`${foundGame.name} Cover`}
                    />
                </div>
                <p className="text-justify">{foundGame.description}</p>
            </div>
        </>
    )
}

Game.getLayout = (page: ReactElement) => {
    return (
        <Main>
            {page}
        </Main>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { Game: game, } = context.query
    if (!context.locale) {
        return { props: {}, }
    }

    const videogameData: VideogameResponse = await getMedia(MediaType.VIDEOGAME, game as string)

    const foundGame = videogameData?.videogame[0]

    if (!foundGame) {
        return {
            notFound: true,
        }
    }

    return { props: { foundGame, ...(await serverSideTranslations(context.locale, [])), }, }
}

export default Game