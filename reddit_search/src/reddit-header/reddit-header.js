import React from 'react'

function getSearchClass(promptSearch) {
    if (promptSearch){
        return 'search-pending';
    } else{
        return 'search-complete';
    }
}

export default({subTitle, promptSearch}) =>(
    <header>
        <h1>Reddit things</h1>
        <h2> {subTitle}</h2>
        <h3 className={getSearchClass(promptSearch)}>
            {promptSearch ? 'Begin you search':'Have you found it?'}
        </h3>    
    </header>
)