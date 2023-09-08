import React from 'react';
import {useCollapse} from 'react-collapsed';

function Collapsible(props) {
    const config = {
        duration: 2000,
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
        // onExpandStart: () => {
        //     console.log('INFO: onExpandStart triggered.');
        // },
        // onExpandEnd: () => {
        //     console.log('INFO: onExpandEnd triggered.');
        // },
        // onCollapseStart: () => {
        //     console.log('INFO: onCollapseStart triggered.');
        // },
        // onCollapseEnd: () => {
        //     console.log('INFO: onCollapseEnd triggered.');
        // }
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
    <div className="collapsible">
        
        <div className="header" {...getToggleProps()}>
            <div className="title">{props.title}</div>
            <div className="icon">
                <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    
        {/* <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div> */}
    </div>
    );
}

export default Collapsible;