import BoxLink from "../components/boxLink"
import { Platform, } from "../types/Platform"

type Props = {
    info: Platform[],
}

const Infobox = ({ info, }: Props) => {
    return (
        <div className="infobox my-2 lg:my-4">
            Infobox
            <div>Plattformen: {info.map(i => (
                <BoxLink url="/" key={i.platform_id.name} name={i.platform_id.name} />
            ))}
            </div>
        </div>
    )
}

export default Infobox