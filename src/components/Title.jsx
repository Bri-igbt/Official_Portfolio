import React from 'react'

const Title = ({title}) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors">{title}</h2>
            <div className="mx-auto mt-3 h-1 w-20 bg-teal-600 dark:bg-teal-500" />
        </div>
    )
}
export default Title
