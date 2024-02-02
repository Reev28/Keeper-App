import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [newNote, setNewNote] = useState({ title: "", content: "" });
    function handleChange(event) {
        const { name, value } = event.target;
        setNewNote((prevValue) => {
            return { ...prevValue, [name]: value }
        })
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />}

                <textarea onClick={() => { setExpanded(true) }} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={newNote.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={(event) => { props.onAdd(newNote); event.preventDefault(); setNewNote({ title: "", content: "" }); }} ><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
