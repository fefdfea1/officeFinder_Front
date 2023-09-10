import { useState } from "react";
import { fetchAcceptData, fetchRejectData } from "../../../fetch/put/agent"
import { useMutation, useQueryClient } from "react-query";

type ModalProps = {
    leaseId: number
    id: string;
    buttonName: string,
    title: string,
    content: string,
    actionButtonName: string,
}


export const DoubleCheckModal = (props: ModalProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient()
    const { mutate: acceptMutation } = useMutation(fetchAcceptData, {
        onSuccess: () => {
            queryClient.invalidateQueries("requestList");
            setModalOpen(false);
        },
    });

    const { mutate: rejectMutation } = useMutation(fetchRejectData, {
        onSuccess: () => {
            queryClient.invalidateQueries("requestList");
            setModalOpen(false);
        },
    });
    const handleAcceptRequest = (leaseId: number) => {

        acceptMutation(leaseId);
    };

    const handleRejectRequest = (leaseId: number) => {
        rejectMutation(leaseId);
    };

    return (
        <>
            <label htmlFor={props.id} className="btn btn-primary btn-xs w-11">{props.buttonName}</label>
            <input type="checkbox" id={props.id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <p className="text-lg font-bold text-primary">{props.title}</p>
                    <p className="py-4">{props.content}</p>
                    <div className="modal-action flex">

                        {props.actionButtonName === "수락" ?
                            <button onClick={() => handleAcceptRequest(props.leaseId)}
                                onClickCapture={() => setModalOpen(!modalOpen)}
                                className="btn btn-primary">{props.actionButtonName}</button>

                            : <button onClick={() => handleRejectRequest(props.leaseId)}
                                onClickCapture={() => setModalOpen(!modalOpen)}
                                className="btn btn-primary">{props.actionButtonName}</button>
                        }
                        <label htmlFor={props.id} className="btn btn-primary btn-outline">닫기</label>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor={props.id}>Close</label>
            </div>
        </>
    );
}
