import React from 'react'
import { Javascript } from '../ui/icons/tech/Javascript'
import { GCP } from '../ui/icons/tech/GCP'
import { Git } from '../ui/icons/tech/Git'
import { Terraform } from '../ui/icons/tech/Terraform'
import { PostgreSQL } from '../ui/icons/tech/PostgreSQL'
import { Postman } from '../ui/icons/tech/Postman'

export const Topics = () => {
    return (
        <div className="flex flex-wrap mt-3 justify-center items-center">
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
                <p className="text-white text-sm font-semibold mb-3">Programming</p>
                <Javascript size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
                <p className="text-white text-sm font-semibold mb-3">Cloud</p>
                <GCP size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
                <p className="text-white text-sm font-semibold mb-3">Git</p>
                <Git size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
                <p className="text-white text-sm font-semibold mb-3">Infrastructure</p>
                <Terraform size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
                <p className="text-white text-sm font-semibold mb-3">Database</p>
                <PostgreSQL size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
                <p className="text-white text-sm font-semibold mb-3">API Tools</p>
                <Postman size={50} />
            </div>
        </div>
    )
}
