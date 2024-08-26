import React from "react"
export type StatsTableProps = {
    labels:string[]
    header:React.ReactNode
    children?: React.ReactNode
}

function StatsTable(props:StatsTableProps) {
    return (
        <div className="mx-20">
            <div className="text-center mx-auto text-2xl my-2"
            >{props.header}</div>
            <table className=" mb-10 rounded-lg">
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