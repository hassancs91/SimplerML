import React, { useEffect, useState } from 'react'

export const TestEmbed = () => {
	const [timeOfDay, setTimeOfDay] = useState<number>(0.5)
	const [contentType, setContentType] = useState<number>(0.5)
	const [dayOfWeek, setDayOfWeek] = useState<number>(0.5)
	const [isPopular, setIsPopular] = useState<boolean>(false)

	const weights = { time: 0.3, content: 0.5, day: 0.2 }

	const predictPopularity = () => {
		const score =
			timeOfDay * weights.time +
			contentType * weights.content +
			dayOfWeek * weights.day
		setIsPopular(score > 0.5)
	}

	useEffect(() => {
		predictPopularity()
	}, [timeOfDay, contentType, dayOfWeek])

	return (
		<div className='mx-auto font-pressStart w-full tracking-tight md:max-w-lg py-8 rounded-lg bg-white p-6 shadow-lg border mt-4'>
			<div className='mb-4 flex flex-col gap-2'>
				<label
					htmlFor='timeOfDay'
					className='mb-1 block text-xs font-bold text-gray-800'
				>
					Time of Day (0 = Morning, 1 = Night):
				</label>
				<input
					type='range'
					id='timeOfDay'
					min='0'
					max='1'
					step='0.1'
					value={timeOfDay}
					onChange={(e) => setTimeOfDay(parseFloat(e.target.value))}
					className='w-full cursor-pointer'
				/>
				<span className='text-sm mx-auto text-gray-500'>
					{timeOfDay.toFixed(1)}
				</span>
			</div>

			<div className='mb-4 flex flex-col gap-2'>
				<label
					htmlFor='contentType'
					className='mb-1 block text-xs font-bold text-gray-800'
				>
					Content Type (0 = Text, 1 = Video):
				</label>
				<input
					type='range'
					id='contentType'
					min='0'
					max='1'
					step='0.1'
					value={contentType}
					onChange={(e) => setContentType(parseFloat(e.target.value))}
					className='w-full cursor-pointer'
				/>
				<span className='text-sm mx-auto text-gray-500'>
					{contentType.toFixed(1)}
				</span>
			</div>

			<div className='mb-4 flex flex-col gap-2'>
				<label
					htmlFor='dayOfWeek'
					className='mb-1 block text-xs font-bold text-gray-800'
				>
					Day of Week (0 = Weekday, 1 = Weekend):
				</label>
				<input
					type='range'
					id='dayOfWeek'
					min='0'
					max='1'
					step='0.1'
					value={dayOfWeek}
					onChange={(e) => setDayOfWeek(parseFloat(e.target.value))}
					className='w-full cursor-pointer'
				/>
				<span className='text-sm mx-auto text-gray-500'>
					{dayOfWeek.toFixed(1)}
				</span>
			</div>

			<div className='mt-4 text-center text-lg font-bold'>
				{isPopular ? (
					<span className='text-green-600'>Popular &#x1F60E;</span>
				) : (
					<span className='text-red-600'>Not Popular &#x1F641;</span>
				)}
			</div>
		</div>
	)
}
