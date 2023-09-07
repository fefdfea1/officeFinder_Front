import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { fetchTotalRevenueData, fetchOverallRentalData } from '../../fetch/get/agent';
import Chart from 'chart.js/auto';

export const SalesCharts = ({ officeId = "전체" }: { officeId?: string }) => {
    const lineChart = useRef<HTMLCanvasElement | null>(null);
    const doughnutChart = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<'line', number[], string> | null>(null);
    const doughnutInstanceRef = useRef<Chart<'doughnut', number[], string> | null>(null);
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary');

    const { data: totalRevenueData } = useQuery('totalRevenue', () => fetchTotalRevenueData(), {
        enabled: officeId !== '전체',
        retry: 1,
    });

    const { data: overallRentalData } = useQuery('overallRental', () => fetchOverallRentalData(), {
        enabled: officeId !== '전체',
        retry: 1,
    });
    console.log(overallRentalData.data)
    useEffect(() => {
        if (!totalRevenueData) return;

        const months = Object.keys(totalRevenueData);
        const counts = months.map(month => totalRevenueData[month]);

        const ctx = lineChart.current?.getContext('2d');

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        if (ctx) {
            chartInstanceRef.current = new Chart(ctx, {
                type: 'line',
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                },
                data: {
                    labels: months,
                    datasets: [
                        {
                            label: '월별 매출현황',
                            data: counts,
                            borderColor: primaryColor,
                        },
                    ],
                },
            });
        }

        if (overallRentalData) {

            updateDoughnutChart();
        }
    }, [totalRevenueData, overallRentalData]);

    // 도넛 차트 업데이트 함수
    const updateDoughnutChart = () => {
        const ctx = doughnutChart.current?.getContext('2d');

        if (doughnutInstanceRef.current) {
            doughnutInstanceRef.current.destroy();
        }

        if (ctx) {
            const usedRooms = overallRentalData.data.roomsInUse;
            const totalRooms = overallRentalData.data.officeRoomCount;

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
    };


    return (
        <div className="flex flex-col gap-2 p-8 lg:flex-row items-center">
            <div className="w-full">
                <canvas id="acquisitions" ref={lineChart}></canvas>
            </div>
            <div className="w-52">
                <canvas id="percent" ref={doughnutChart}></canvas>
                <p className="text-center p-2 text-sm">점유율: {overallRentalData?.data?.leaseRate} %</p>

            </div>
        </div>
    );
};
