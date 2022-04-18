import Link from "next/link"

type Props = {
    url: string,
    key: string,
    name: string
}

const BoxLink = ({ url, key, name, }: Props) => {
    return (
        <Link href={url}>
            <span className="border border-solid border-black mx-1" key={key}>{name}</span>
        </Link>
    )
}

export default BoxLink