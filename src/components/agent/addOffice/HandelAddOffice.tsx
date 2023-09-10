import { useState } from "react";
import type { Address, officeOptions } from '../../../type/agentTypes';

type Options = {
    [key: string]: boolean;
};



export const useAddOfficeHandel = () => {
    const [name, setName] = useState<string>()
    const [selectedOptions, setSelectedOptions] = useState<officeOptions>();
    const [address, setAddress] = useState<Address>({
        legion: "",
        city: "",
        town: "",
        street: "",
        detail: "",
        zipcode: "",
    })
    const [rooms, setRooms] = useState<number>()
    const [maxCapacity, setMaxCapacity] = useState<number>()
    const [monthlyPrice, setMonthlyPrice] = useState<number>()
    const [images, setImages] = useState<Blob[]>([])


    //오피스 이름
    const handleOfficeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const officeName = e.target.value;
        setName(officeName);
    }


    //주소
    const handleAddressChange = (address: Address) => {
        setAddress({
            ...address
        });
    }

    //가격 -> 세자리 수마다 콤마
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let priceValue = parseFloat(event.target.value.replace(/[^0-9]/g, ''));
        const formatValue = priceValue.toLocaleString('ko-KR');

        if (isNaN(priceValue)) {
            setMonthlyPrice(0);
            event.target.value = "0";
        } else {
            setMonthlyPrice(priceValue);
            event.target.value = formatValue;
        }
    };
    // 옵션 
    const handleOptionsChange = (options: Options) => {
        setSelectedOptions(options);
    };
    // 방 개수 
    const handleCountRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rooms = parseInt(e.target.value, 10); // 문자열을 숫자로 변환
        setRooms(rooms);
    };

    // 최대 인원 수
    const handleMaxCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const capacity = parseInt(e.target.value, 10); // 문자열을 숫자로 변환
        setMaxCapacity(capacity);
    };
    // 파일저장
    const handlefileUpload = (images: Blob[]) => {
        setImages(images);
    };




    return {
        selectedOptions,
        handleOptionsChange,
        address,
        handleAddressChange,
        monthlyPrice,
        handlePriceChange,
        name,
        handleOfficeName,
        rooms,
        handleCountRoomsChange,
        maxCapacity,
        handleMaxCapacityChange,
        images,
        handlefileUpload

    };
};
