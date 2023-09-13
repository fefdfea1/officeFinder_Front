import { useRef, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchTotalRevenueData, fetchRevenueData } from "../../../fetch/get/agent";
import { chartsData } from "../../../type/agentTypes";
import Chart from "chart.js/auto";

type Id = {
    officeId: number
}

export const TotalRevenueChart = (props: Id) => {
    const lineChart = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<"line", number[], string> | null>(null);
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary");
    const [lineData, setLineData] = useState<chartsData | null>(null);

    const { isLoading: totalLoading, isError: totalError } = useQuery<chartsData>("totalRevenue", fetchTotalRevenueData, {
        retry: 1,
        enabled: props.officeId === -1,
        onSuccess: (data) => setLineData(data),
    });

    const { isLoading, isError } = useQuery<chartsData>(["revenue", props.officeId], () => fetchRevenueData(props.officeId), {
        retry: 1,
        enabled: props.officeId !== -1,
        onSuccess: (data) => setLineData(data),
    });

    useEffect(() => {
        const updateChart = () => {
            if (props.officeId !== -1 && lineData) {
                const months = Object.keys(lineData.data);
                const counts = Object.values(lineData.data);

                const ctx = lineChart.current?.getContext("2d");

                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }

                if (ctx) {
                    chartInstanceRef.current = new Chart(ctx, {
                        type: "line",
                        options: {
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                y: {
                                    min: 0
                                }
                            }
                        },
                        data: {
                            labels: months,
                            datasets: [
                                {
                                    label: "월별 매출현황",
                                    data: counts,
                                    borderColor: primaryColor,
                                },
                            ],
                        },
                    });
                }
            }
        };
        updateChart();
    }, [props.officeId, lineData]);

    if (totalLoading || isLoading) return (<p>Loading...</p>);
    if (totalError || isError) return (<p>데이터를 불러 올 수 없습니다.</p>);

    return (
        <div className="w-full">
            <canvas id="acquisitions" ref={lineChart}></canvas>
        </div>
    );
};
