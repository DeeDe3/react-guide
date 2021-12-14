import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    const dataValue = props.data.map(datas => datas.value)
    const totalMax = Math.max(...dataValue)

    return (
        <div className='chart'>
            {props.data.map(datas => (
                <ChartBar
                    key={datas.label}
                    value={datas.value}
                    maxValue={totalMax}
                    label={datas.label}
                />
            ))}
        </div>
    )
}

export default Chart