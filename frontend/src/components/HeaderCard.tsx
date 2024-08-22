
export type Props = {
    children:string
}

function PlayerCard(props:Props) {

    return (
        <>
        <div className="text-center mx-auto text-2xl rounded w-fit 
        bg-gradient-to-r from-sky-300 to-stone-300 px-3 my-2 shadow-lg"
        >{props.children}</div>
        </>
    )
}

export default PlayerCard