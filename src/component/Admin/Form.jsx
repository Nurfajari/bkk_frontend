function Form({children})
{
    return(
        <form action="" method="" className="p-5">
            {children}
        </form>
    )
}

function Label({children})
{
    return(
        <label htmlFor="" className="text-black">{children}</label>
    )
}

function InputText()
{
    return(
        <input type="text" className="p-2 mt-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
    )
}

function InputFile()
{
    return(
        <input type="file" />
    )
}

Form.Label = Label
Form.InputText = InputText
Form.InputFile = InputFile

export default Form