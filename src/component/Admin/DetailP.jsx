function DetailP({children})
{
    return(
        <div className="flex items-center gap-3 border rounded-xl">
            {children}
        </div>
    )
}

function Logo({children})
{
    return(
        <div className="">{children}</div>
    )
}

function Konten({children})
{
    return(
        <div className="">
            {children}
        </div>
    )
}

function Lowongan({children})
{
    return(
        <div className="">
            <h1 className="text-xl mb-3">Lowongan Yang dibuka :</h1>
            <div className="">
                {children}
            </div>
        </div>
    )
}

DetailP.Logo = Logo
DetailP.Konten = Konten
DetailP.Lowongan = Lowongan

export default DetailP