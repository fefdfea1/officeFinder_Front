import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        daum: any;
    }
}

type data = {
    addr: string;
    extraAddr: string;
    userSelectedType: string;
    roadAddress: string;
    jibunAddress: string;
    bname: string;
    zonecode: string;
    buildingName: string;
    apartment: string;

}

export const AddOfficeAddress = () => {
    const daumPostcodeRef = useRef<any>(null);
    const postcodeRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const detailAddressRef = useRef<HTMLInputElement>(null);
    const extraAddressRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;

        script.onload = () => {
            daumPostcodeRef.current = new window.daum.Postcode({
                oncomplete: handleAddressComplete
            });
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleAddressComplete = (data: data) => {
        let addr = '';
        let extraAddr = '';
        console.log(data)

        if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
        } else {
            addr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            if (extraAddr !== '') {
                extraAddr = ' (' + extraAddr + ')';
            }
            if (extraAddressRef.current) {
                extraAddressRef.current.value = extraAddr;
            }
        } else {
            if (extraAddressRef.current) {
                extraAddressRef.current.value = '';
            }
        }

        if (postcodeRef.current) {
            postcodeRef.current.value = data.zonecode;
        }
        if (addressRef.current) {
            addressRef.current.value = addr;
        }
        if (detailAddressRef.current) {
            detailAddressRef.current.focus();
        }

    };

    const handlePostcodeButtonClick = () => {
        if (daumPostcodeRef.current) {
            daumPostcodeRef.current.open();

        }

    };


    return (
        <div className="w-96">
            <p className="flex justify-center text-base mb-4">오피스의 주소를 입력해주세요.</p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input type="text" ref={postcodeRef} placeholder="우편번호" className="input input-primary" readOnly />
                    <input type="button" onClick={handlePostcodeButtonClick} value="주소 입력" className="btn btn-primary " readOnly />
                </div>
                <input type="text" ref={addressRef} placeholder="주소" className="input input-primary" readOnly />
                <div className="flex gap-2">

                    <input type="text" ref={detailAddressRef} placeholder="상세주소" className="input input-primary w-2/3" />
                    <input type="text" ref={extraAddressRef} placeholder="참고항목" className="input input-primary w-1/3" readOnly />
                </div>
            </div>
        </div>
    );
};
