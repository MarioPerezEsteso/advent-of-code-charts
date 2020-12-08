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
            <h5>Enter your leaderboard data as JSON</h5>
            <div className="alert alert-info">
                Get it by appending a <code>.json</code> at the end of your leaderboard page:<br />
                <small>https://adventofcode.com/2020/leaderboard/private/view/<code>your-leaderboard-id</code>.json</small>
            </div>
            <textarea className="form-control" id="text-area-json-input" rows="4" onChange={onChange} onPaste={onPaste} defaultValue={data}></textarea>
        </div>
    )
}

export default DataTextArea