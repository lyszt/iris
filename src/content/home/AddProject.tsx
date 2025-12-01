import { type FC, type MouseEvent, type FormEvent } from "react";
import { useState, useRef } from "react";
import type { ProjectInput } from "../../types/domain/project";
import type Network from "../../lib/Network";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import * as languages from "linguist-languages";
import Draggable from 'react-draggable'; 
import {addProject} from "./projectServices";
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

interface AddProjectProps {
    projectManager: Network;
}

interface ProjectFormProps {
    projectManager: Network;
    initialData?: ProjectInput;
    onSubmit: (data: ProjectInput) => void;
    onCancel: () => void;
}

const ProjectForm: FC<ProjectFormProps> = ({ onCancel, onSubmit }) => {

    const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [projectStatus, setProjectStatus] = useState("");

    const languageNames = Object.values(languages)
        .map((lang: any) => lang.name as string)
        .sort();

        
    function prepareProject(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

    }

    return <form className="w-full bg-white z-9999 p-6 flex flex-col justify-left items-left shadow-2xl rounded-lg">
        <div className="handle cursor-move bg-gray-200 -mx-6 -mt-6 mb-4 p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="crimson" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
                <h2 className="text-lg font-semibold text-gray-900">Add project</h2>
            </div>
            <button 
                type="button"
                onClick={onCancel}
                className="p-1 hover:bg-gray-300 rounded transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="crimson" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <Box
            sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
            className="flex flex-col"
        >
            <TextField id="outlined-basic" onChange={((e) => setProjectName(e.currentTarget.value))} color="secondary" label="Project name" variant="outlined" />
            <TextField id="outlined-basic" onChange={((e) => setProjectDesc(e.currentTarget.value))} color="secondary" multiline label="Project description" variant="outlined" />

            <Autocomplete
                options={languageNames}
                renderInput={(params) => <TextField {...params} label="Language/Stack" onChange={((e) => setProjectStatus(e.currentTarget.value))}/>}
            />

            <Button onSubmit={prepareProject} startIcon={<LibraryAddCheckOutlinedIcon/>} type="submit" variant="outlined">Adicionar Projeto</Button>

        </Box>

        
    </form>
}



const AddProject: FC<AddProjectProps> = ({ projectManager }) => {
    const [projectData] = useState<ProjectInput | undefined>(undefined);
    const [showForm, setShowForm] = useState(false);
    const nodeRef = useRef(null);

    return (
        <div>
            {showForm && (
                <Draggable handle=".handle" nodeRef={nodeRef}>
                    <div ref={nodeRef} style={{ position: 'fixed', zIndex: 9999, width: '50%' }}>
                        <ProjectForm
                            projectManager={projectManager}
                            initialData={projectData}
                            onSubmit={() => setShowForm(false)}
                            onCancel={() => setShowForm(false)}

                        />
                    </div>
                </Draggable>
            )}
            <button onClick={() => setShowForm(true)} className="flex flex-row gap-2 m-5 p-3 transition duration-100 hover:bg-gray-100 rounded active:bg-gray-200">
                <svg className="w-[1.5vw]"

                    viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="crimson"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -1089.000000)" fill="crimson"> <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle"> </path> </g> </g> </g></svg>
                Add project
            </button>
        </div>
    );
}

export default AddProject;