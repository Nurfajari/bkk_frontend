import { IconSearch, IconSquareRoundedPlus } from "@tabler/icons-react"
import BasicModal from "./Modal"
import { Form } from "react-router-dom"
import FormT from "./FormT"

function HeadPage({children})
{
    return(
        <div className="flex justify-between mb-3">
            {children}
        </div>
    )
}   

function Title({children})
{
    return(
        <h1 className="text-2xl">{children}</h1>
    )
}

function SearchAdd({children})
{
    return(
        <div className="flex gap-x-5">
            {children}
            {/* <button className="text-3xl text-white p-1 font-bold rounded-md bg-black">
              <IconSquareRoundedPlus/>
            </button> */}
            <div className="border-[1px] border-black/40 rounded-md overflow-hidden relative">
                <input
                type="text"
                className="focus:outline-none text-md pl-2 pr-8 pt-[3px] placeholder:text-black/50"
                placeholder="Search..."
                />
                <div className="absolute right-2 top-1 bottom-0">
                    <IconSearch className="w-6 h-6" stroke={1} />   
                </div>
            </div>
        </div>
    )
}

function BtnModal()
{
    return(
        <BasicModal></BasicModal>
    )
}

HeadPage.Title = Title
HeadPage.SearchAdd = SearchAdd
HeadPage.BtnModal = BtnModal

export default HeadPage