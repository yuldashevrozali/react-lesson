import React from 'react'

export default function Select(props) {
    const { value1, value2, value3, value4, value5, text } = props
    return (
        <>
        <label htmlFor="select">{text} <span>*</span></label>
            <select id='select'>
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
                <option value={value4}>{value4}</option>
                <option value={value5}>{value5}</option>
            </select>
        </>
    )
}
