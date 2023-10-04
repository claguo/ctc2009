import React, { useState, useEffect } from 'react';

function CreateGrid(props) {
    const [cellArray, setCellArray] = useState(Array.from({ length: 1008 }, (_, index) => ({content: '', isHovered: false, isClicked: false, hsl: 'hsl(171, 3%, 95%'})));

    return (
        <div>grid</div>
    )
};

export default CreateGrid;