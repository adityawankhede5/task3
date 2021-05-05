import React, { useState } from 'react'

const AllLables = ({lables, mesh, updateMeshName}) => {
    return lables.map(lable => {
        return (
            <div key={lable} className="lableContainer" onClick={() => {updateMeshName(mesh, lable)}}>
                {lable}
            </div>
        )
    })
}
export default function Lables({position, mesh, updateMeshName, closeOptions}) {
    const lables = ["back door", "backyard", "basement", "bathroom", "bedroom", "ceiling", "chimney", "column", "dining room", "doghouse", "door", "fence", "fenced yard", "fireplace", "furniture" ];
    const [filteredLables, setFilteredLables] = useState(lables);
    const [lableInput, setLableInput] = useState("");
    const handleChange = (e) => {
        setLableInput(e.target.value);
        setFilteredLables(lables.filter(lable => {return lable.startsWith(e.target.value)}))
    }
    return (
        <div className="lablesContainer" style={{top: position.top, left: position.left}}>
            <input type="text" placeholder="Search" value={lableInput} onChange={handleChange} />
            <div className="allLablesContainer">
                <AllLables lables={filteredLables} mesh={mesh} updateMeshName={updateMeshName} />
            </div>
            <div className="cancelButton" onClick={closeOptions} >
                Cancel
            </div>
        </div>
    )
}
