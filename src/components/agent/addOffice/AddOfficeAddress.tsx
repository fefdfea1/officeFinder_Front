import { useRef, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import type { Address } from "../../../type/agentTypes";
type OnAddressHandler = (address: Address) => void;

type AddressType = {
    onAddressHandler: OnAddressHandler;
}

export const AddOfficeAddress = (props: AddressType) => {
    const open = useDaumPostcodePopup();
    const postcodeRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const extraAddressRef = useRef<HTMLInputElement>(null);
    const detailAddressRef = useRef<HTMLInputElement>(null);
    const [address, setAddress] = useState<Address>({
        legion: "",
        city: "",
        town: "",
        street: "",
        zipcode: "",
        detail: ""
    });

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        if (addressRef.current && postcodeRef.current && extraAddressRef.current) {
            postcodeRef.current.value = data.zonecode;
            addressRef.current.value = data.address;
            extraAddressRef.current.value = "(" + data.bname + ")" + " " + data.buildingName
        }

        const newAddress = {
            ...address,
            legion: data.sido,
            city: data.sigungu,
            town: data.bname,
            street: data.address,
            zipcode: data.zonecode,
        }
        setAddress(newAddress);
        props.onAddressHandler(newAddress);
    };

    const detailHandler = () => {
        setAddress({ ...address, detail: detailAddressRef.current?.value || "" })
        props.onAddressHandler({ ...address, detail: detailAddressRef.current?.value || "" })
    }

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };
    return (
        <div className="w-96">
            <p className="flex justify-center text-base mb-4">오피스의 주소를 입력해주세요.</p>
            <div className="flex flex-col gap-2 items-center md:items-start">
                <div className="flex gap-2">
                    <input type="text" ref={postcodeRef} placeholder="우편번호" className="input input-primary placeholder:text-base w-56" readOnly />
                    <button type="button" className="btn btn-primary" onClick={handleClick}>
                        주소검색
                    </button>
                </div>
                <input type="text" ref={addressRef} placeholder="주소" className="input input-primary placeholder:text-base w-80 md:w-full" readOnly />
                <div className="flex gap-2 w-80 md:w-full">
                    <input type="text" ref={detailAddressRef} placeholder="상세 주소를 입력해주세요." onChange={detailHandler} className="placeholder:text-base input input-primary w-2/3" />
                    <input type="text" ref={extraAddressRef} placeholder="참고항목" className="input input-primary w-1/3 placeholder:text-base" readOnly />
                </div>
            </div>
        </div>
    );
};
