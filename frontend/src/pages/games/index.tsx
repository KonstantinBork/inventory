import { GetServerSideProps, } from "next"

const Games = () => {
  return (
    <div>Games</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.locale) {
    return { props: {}, }
  }

  return { props: {}, }
}

export default Games