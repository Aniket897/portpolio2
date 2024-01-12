
const Queote = () => {
    return (
        <div className="mx-auto w-fit flex flex-col mt-[100px]">
            <div className="p-4 border relative border-gray">
                <p>With great power comes great electricity bill</p>
                <div className="absolute w-[20px] flex items-center justify-center h-[20px] bg-dark top-[-10px] left-3">
                    <img className="w-[15px]" src="/quote.svg" alt="" />
                </div>
                <div className="absolute w-[20px] flex items-center justify-center h-[20px] bg-dark bottom-[-10px] right-3">
                    <img className="w-[15px]" src="/quote.svg" alt="" />
                </div>
            </div>
            <div className="p-2 border border-gray w-fit self-end">
                <p>- Dr. Who</p>
            </div>
        </div>
    )
}

export default Queote;