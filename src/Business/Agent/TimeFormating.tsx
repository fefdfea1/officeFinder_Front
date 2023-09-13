export const TimeFormating = (props: string) => {
    const date = new Date(props);
    const options: Intl.DateTimeFormatOptions = {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    const formatter = new Intl.DateTimeFormat("en-US", options).format(date);

    const formattedDate = formatter.replace(/,/g, "")


    return formattedDate;
};

export const ChatTimeFormating = (props: string) => {
    const date = new Date(props);
    const formatter = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    console.log(props)
    return formatter;
};