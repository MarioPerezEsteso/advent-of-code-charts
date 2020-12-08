import React, { useState } from 'react'

const DataTextArea = ({ dataHandler }) => {

    const [data, setData] = useState('{}')

    const onChange = (e) => {
        setData(e.target.value)
        dataHandler(JSON.parse(data))
    }

    const onPaste = (e) => {
        setData(e.clipboardData.getData('text/plain'))
        dataHandler(JSON.parse(data))
    }

    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
                Enter your leaderboard data as JSON<br />
                Get it by appending a <code>.json</code> at the end of your leaderboard page:<br />
                <small>https://adventofcode.com/2020/leaderboard/private/view/<code>your-leaderboard-id</code>.json</small></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={onChange} onPaste={onPaste} defaultValue={data}></textarea>
        </div>
    )
}

export default DataTextArea