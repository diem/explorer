import React from 'react'



export const NoRecords: React.FC<{ value: string | null }> = (
    props
) => {
    if (props.value === '' || props.value === null) {
        return <></>
    }

    return (
        <>
            <p>{String(props.value)}</p>
        </>
    )
}