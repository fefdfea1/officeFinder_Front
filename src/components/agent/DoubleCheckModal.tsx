type ModalProps = {
    buttonName: string,
    title: string,
    content: string,
    actionButtonName: string,
    onConfirm: () => void;
}
export const DoubleCheckModal = (props: ModalProps) => {


    return (<>
        {/* The button to open modal */}
        <label htmlFor="my_modal_7" className="btn btn-primary btn-xs w-11">{props.buttonName}</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <p className="text-lg font-bold text-primary">{props.title}</p>
                <p className="py-4">{props.content}</p>
                <div className="modal-action flex">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={props.onConfirm} className="btn btn-primary btn-outline">{props.actionButtonName}</button>
                    <label htmlFor="my_modal_7" className="btn btn-primary">닫기</label>
                </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    </>)
}