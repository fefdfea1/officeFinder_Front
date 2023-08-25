import { useRef, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
type OnAddressHandler = (address: Address) => void;

type Address = {
    legion?: string,
    city?: string,
    town?: string,
    village?: string,
    street?: string,
    zipcode?: string,
    detail?: string,
}

export const AddOfficeAddress = ({ onAddressHandler }: { onAddressHandler: OnAddressHandler }) => {
    const open = useDaumPostcodePopup();
    const postcodeRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const extraAddressRef = useRef<HTMLInputElement>(null);
    const detailAddressRef = useRef<HTMLInputElement>(null);
    const [address, setAddress] = useState<Address>({
        legion: '',
        city: '',
        town: '',
        village: '',
        street: '',
        zipcode: '',
        detail: ''
    });

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        if (addressRef.current && postcodeRef.current && extraAddressRef.current) {
            postcodeRef.current.value = data.zonecode;
            addressRef.current.value = data.query;
            extraAddressRef.current.value = "(" + data.bname + ")" + " " + data.buildingName

        }
        setAddress({
            ...address,
            legion: data.sido,
            city: data.sigungu,
            town: data.bname,
            street: data.roadAddress,
            zipcode: data.zonecode,
        })


        console.log(data)
    };

    const detailHandler = () => {
        setAddress({ ...address, detail: detailAddressRef.current?.value || "" })
    }
    console.log(address);

    onAddressHandler(address)
    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <div className="w-96">
            <p className="flex justify-center text-base mb-4">오피스의 주소를 입력해주세요.</p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input type="text" ref={postcodeRef} placeholder="우편번호" className="input input-primary placeholder:text-base" readOnly />
                    <button type='button' className="btn btn-primary" onClick={handleClick}>
                        주소검색
                    </button>
                </div>
                <input type="text" ref={addressRef} placeholder="주소" className="input input-primary placeholder:text-base" readOnly />
                <div className="flex gap-2">
                    <input type="text" ref={detailAddressRef} placeholder="상세 주소를 입력해주세요." onChange={detailHandler} className="placeholder:text-base input input-primary w-2/3" />
                    <input type="text" ref={extraAddressRef} placeholder="참고항목" className="input input-primary w-1/3 placeholder:text-base" readOnly />
                </div>
            </div>
        </div>
    );
};
