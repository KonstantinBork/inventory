type Props = {
    titleName: string
}

const Title = ({ titleName, } : Props) => {
    return (
        <div className="head flex flex-auto flex-col">
            <div className="title mx-2 mt-2 lg:mx-4 lg:mt-4">
                <h1 className="text-2xl lg:text-3xl font-bold">{titleName}</h1>
            </div>
        </div>
    )
}

export default Title