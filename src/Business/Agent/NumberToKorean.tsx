
type price = {
    price: number;
}

export const NumberToKoreanConverter = (props: price) => {
    let result = "";
    const characters = 8 // 숫자열의 길이값
    const units = ["", "만 ", "억 ", "조 ", "경 ", "해 ", "자 ", "양 ", "구 ", "간 ", "정 "];
    let num = props.price;
    let resultCharacters = 0;

    while (num > 0 && (!characters || result.length < characters)) {
        const currentUnitIndex = Math.min(Math.floor(Math.log10(num) / 4), units.length - 1);
        const currentUnit = units[currentUnitIndex];
        let currentNum = num / Math.pow(10, currentUnitIndex * 4);
        currentNum = Math.floor(currentNum);
        const currentNumStr = currentNum.toString().split("");
        for (let i = 0; i < currentNumStr.length; i++) {
            if (i !== 0 && (currentNumStr.length - i) % 4 === 0) {
                result += ",";
            }
            result += currentNumStr[i];
        }
        result += currentUnit;
        resultCharacters += 1;
        num -= currentNum * Math.pow(10, currentUnitIndex * 4);
    }
    return (
        <div>
            <span className="text-primary text-base"> {`${result}원`}</span>
        </div>
    );
};
