import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const SalesCharts = () => {
    const lineChart = useRef<HTMLCanvasElement | null>(null);
    const doughnutChart = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<'line', number[], string> | null>(null);
    const doughnutInstanceRef = useRef<Chart<'doughnut', number[], string> | null>(null);
    const today = new Date();
    const thisMonth = today.getMonth() + 1;

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
                            label: 'Acquisitions by month',
                            data: data.map(row => row.count),
                        },
                    ],
                },
            });
        }
    }, []);

    useEffect(() => {
        const data = {
            labels: [
                '사용',
                '미사용',
            ],
            datasets: [{
                label: '전체 오피스 10개',
                data: [8, 2], //[ 전체 오피스 - 사용 중인 오피스 , 사용 중인 오피스]
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue('--primary'),
                    getComputedStyle(document.documentElement).getPropertyValue('--secondary'),
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
        <div className="flex gap-2 p-8">
            <div className="w-full">
                <canvas id="acquisitions" ref={lineChart}></canvas>
            </div>
            <div className="w-52">
                <canvas id="percent" ref={doughnutChart}></canvas>
            </div>
        </div>
    );
};
