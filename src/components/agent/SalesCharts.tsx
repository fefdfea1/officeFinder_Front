import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const SalesCharts = () => {
    const lineChart = useRef<HTMLCanvasElement | null>(null);
    const doughnutChart = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<'line', number[], string> | null>(null);
    const doughnutInstanceRef = useRef<Chart<'doughnut', number[], string> | null>(null);
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
    const SecondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary');

    useEffect(() => {
        const data = [
            { month: `${thisMonth - 6}월`, count: 10 },
            { month: `${thisMonth - 5}월`, count: 20 },
            { month: `${thisMonth - 4}월`, count: 15 },
            { month: `${thisMonth - 3}월`, count: 25 },
            { month: `${thisMonth - 2}월`, count: 22 },
            { month: `${thisMonth - 1}월`, count: 30 },
            { month: `${thisMonth}월`, count: 28 },
        ];

        const ctx = lineChart.current?.getContext('2d');

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        if (ctx) {

            chartInstanceRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(row => row.month),
                    datasets: [
                        {
                            label: '월별 매출현황',
                            data: data.map(row => row.count),
                            borderColor: primaryColor,
                        },
                    ],
                },
            });
        }
    }, []);

    useEffect(() => {
        const data = {
            labels: [
                '사용 오피스',
                '미사용 오피스',
            ],
            datasets: [{
                label: '현재 사용 중인 오피스',
                data: [8, 2], //[ 전체 오피스 - 사용 중인 오피스 , 사용 중인 오피스]
                backgroundColor: [
                    primaryColor,
                    SecondaryColor,
                ],
                hoverOffset: 4
            }]
        };

        const ctx = doughnutChart.current?.getContext('2d');

        if (doughnutInstanceRef.current) {
            doughnutInstanceRef.current.destroy();
        }

        if (ctx) {
            doughnutInstanceRef.current = new Chart(ctx, {
                type: 'doughnut',
                data: data,
            });
        }
    }, []);

    return (
        <div className="flex flex-col gap-2 p-8 lg:flex-row items-center">
            <div className="w-full">
                <canvas id="acquisitions" ref={lineChart}></canvas>
            </div>
            <div className="w-52">
                <canvas id="percent" ref={doughnutChart}></canvas>
            </div>
        </div>
    );
};
