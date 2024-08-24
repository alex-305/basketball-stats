
export type Props = {
    children:string
}

function PlayerCard(props:Props) {

    return (
        <>
        <div className="text-center text-2xl rounded w-fit 
        bg-gradient-to-r from-sky-300 to-stone-300 px-0 mx-0 shadow-lg"
        >{props.children}</div>
        </>
    )
}

export default PlayerCard