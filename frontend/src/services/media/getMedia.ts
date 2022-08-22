import { ApolloClient, gql, InMemoryCache, } from "@apollo/client"
import { VideogameResponse, } from "types/response/VideogameResponse"

export const getMedia = async (mediaType: string, mediaSlug: string): Promise<VideogameResponse> => {
  const client = new ApolloClient({ uri: 'http://localhost:8055/graphql', cache: new InMemoryCache(), })

  const GET_MEDIA = gql`
        query getMedia($slug: String!) {
            videogame(filter: {url: {_eq: $slug}}) {
                name
                url
                image_url
                description
                platforms {
                    platform_id {
                        name
                    }
                }
            }
        }
    `

  const data = await client.query({
    query: GET_MEDIA,
    variables: { slug: mediaSlug, },
  })

  return data?.data
}