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
    const handleOptionsChange = (options: Options) => {
        setSelectedOptions(options);
    };

    const handleAddressChange = (address: Address) => {
        setAddress({
            ...address
        });
    }




    return { selectedOptions, handleOptionsChange, address, handleAddressChange };
};
