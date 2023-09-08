import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { fetchOverallRentalData } from '../../../fetch/get/agent';
import { chartsData } from "../../../type/agentTypes"
import Chart from 'chart.js/auto';


type Id = {
    officeId: number
}

export const OverallRentalChart = (props: Id) => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
    const doughnutChart = useRef<HTMLCanvasElement | null>(null);
    const doughnutInstanceRef = useRef<Chart<'doughnut', number[], string> | null>(null);
    const { data: overallRentalData, isLoading, isError } = useQuery<chartsData>('overallRental', fetchOverallRentalData, {
        enabled: props.officeId === -1,
        retry: 1,
    });



    useEffect(() => {
        if (!overallRentalData) return
        const chartData = overallRentalData.data
        const ctx = doughnutChart.current?.getContext('2d');

        if (doughnutInstanceRef.current) {
            doughnutInstanceRef.current.destroy();
        }

        if (ctx) {
            const usedRooms = chartData.roomsInUse;
            const totalRooms = chartData.officeRoomCount;

            const data = {
                labels: ['사용 오피스', '미사용 오피스'],
                datasets: [
                    {
                        data: [usedRooms, totalRooms - usedRooms],
                        backgroundColor: [primaryColor, secondaryColor],
                        hoverOffset: 4,
                    },
                ],
            };

            doughnutInstanceRef.current = new Chart(ctx, {
                type: 'doughnut',
                data: data,
            });
        }
    }, [props.officeId]);
    if (isLoading) return (<p>Loading...</p>);
    if (isError) return (<p>데이터를 불러 올 수 없습니다.</p>);
    console.log(overallRentalData)

    return (
        <div className="w-60">
            <canvas id="percent" ref={doughnutChart}></canvas>
            {overallRentalData && (
                <p className="text-center p-2 text-sm">점유율: {overallRentalData.data.leaseRate} %</p>
            )}

        </div>
    );
};
