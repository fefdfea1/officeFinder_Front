import { useState } from "react";

type Options = {
    [key: string]: boolean;
};
type Address = {
    legion: string,
    city: string,
    town: string,
    street: string,
    detail: string,
    zipcode: string
};


export const useAddOfficeHandel = () => {
    const [selectedOptions, setSelectedOptions] = useState<Options>({});
    const [address, setAddress] = useState<Address>({
        legion: "",
        city: "",
        town: "",
        street: "",
        detail: "",
        zipcode: "",
    })
    const [monthlyPrice, setMonthlyPrice] = useState<number>()
    // 옵션 
    const handleOptionsChange = (options: Options) => {
        setSelectedOptions(options);
    };
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





    return {
        selectedOptions,
        handleOptionsChange,
        address,
        handleAddressChange,
        monthlyPrice,
        handlePriceChange,
    };
};
