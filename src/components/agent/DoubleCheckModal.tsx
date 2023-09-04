import { useState } from "react";

type ModalProps = {
    id: string;
    buttonName: string,
    title: string,
    content: string,
    actionButtonName: string,
    onConfirm: () => void;
}

export const DoubleCheckModal = (props: ModalProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <label htmlFor={props.id} className="btn btn-primary btn-xs w-11">{props.buttonName}</label>

            <input type="checkbox" id={props.id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <p className="text-lg font-bold text-primary">{props.title}</p>
                    <p className="py-4">{props.content}</p>
                    <div className="modal-action flex">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={props.onConfirm} onClickCapture={() => setModalOpen(!modalOpen)} className="btn btn-primary btn-outline">{props.actionButtonName}</button>
                        <label htmlFor={props.id} className="btn btn-primary">닫기</label>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor={props.id}>Close</label>
            </div>
        </>
    );
}
