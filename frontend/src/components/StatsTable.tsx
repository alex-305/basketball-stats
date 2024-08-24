import React from "react"
export type StatsTableProps = {
    labels:string[]
    header:React.ReactNode
    children?: React.ReactNode
}

function StatsTable(props:StatsTableProps) {
    return (
        <div className="mx-20">
            <div className="text-center mx-auto text-2xl rounded w-fit 
            bg-gradient-to-r from-sky-300 to-stone-300 px-3 my-2 shadow-lg"
            >{props.header}</div>
            <table className="shadow-xl mb-10 rounded-lg">
                <thead>
                    <tr className="bg-gradient-to-r from-cyan-500 to-blue-500">
                        {props.labels.map((item) => (
                        <th key={item} className="px-5 py-2 text-white text-mono text-shadow-sm">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {props.children}
                </tbody>
            </table>
        </div>
    )
}

export default StatsTable