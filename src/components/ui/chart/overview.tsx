"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type DataType = {
  ooid: string,
  ld: number[][],
  lw: number[],
  ly: number[]
}


const data:DataType = {
  "ooid": "60c72b4f2f4f9c6e8b1e6e75",
  "ld": [
      [
          480, 720, 600, 300, 420, 660, 540
      ],
      [
          600, 660, 420, 480, 720, 300, 540
      ],
      [
          420, 480, 720, 600, 300, 540, 660
      ],
      [
          720, 300, 540, 420, 600, 660, 480
      ]
  ],
  "lw": [
      4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730, 4020, 3930, 3720, 4010, 3920, 3730
  ],
  "ly": [
      208920, 209860, 208020, 209960
  ]
}

type TransformedDataType = {
  name: string,
  total: number
}

// Transform the data to the format that Recharts expects, creating array of objects containing last 7 days
function transformData(data: DataType): TransformedDataType[] {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let transformedData: TransformedDataType[] = [];

  // Get the last week's data
  const lastWeekData = data.ld[data.ld.length - 1];

  lastWeekData.forEach((dayData, dayIndex) => {
    transformedData.push({
      name: days[dayIndex],
      total: dayData,
    });
  });

  return transformedData;
}

const transformedData = transformData(data);

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={transformedData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}