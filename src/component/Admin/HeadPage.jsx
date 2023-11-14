export default function HeadPage()
{
    return(
        <div className="flex justify-between">
            <h1 className="text-2xl"></h1>
            <div className="flex gap-x-5">
                <button className="text-3xl text-white px-3 font-bold rounded-md bg-black">
                    +
                </button>
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
        </div>
    )
}