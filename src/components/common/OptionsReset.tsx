import { IoRefreshCircleOutline } from 'react-icons/io5'


export const OptionsReset = () => {

    const handleAllOptionsReset = () => {

    }
    return (<>
        <button className="btn btn-circle btn-primary btn-xs" onClick={handleAllOptionsReset}>
            <IoRefreshCircleOutline className="text-base-100 text-xl" />
        </button>
    </>)
}