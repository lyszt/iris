import { type FC, type Dispatch, type SetStateAction } from "react";
import { useState, useRef, useEffect } from "react";
import type { ProjectInput } from "../../types/domain/project";
import type Network from "../../lib/Network";
import Draggable from 'react-draggable';
import { getModalStyle } from '../../components/modalStyles';
import ProjectForm from './ProjectForm';
import AddJSONProjectForm from './AddJSONProjectForm';
import AddCircle from '@mui/icons-material/AddCircle';
import Description from '@mui/icons-material/Description';

interface AddProjectProps {
    projectManager: Network;
    projectRefresh?: number;
    setProjectRefresh?: Dispatch<SetStateAction<number>>;
}

const AddProject: FC<AddProjectProps> = ({ projectManager, setProjectRefresh }) => {
    const [projectData] = useState<ProjectInput | undefined>(undefined);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentForm, setCurrentForm] = useState<number | null>(null);
    const nodeRef = useRef(null);

    const handleFormSubmit = () => {
        setCurrentForm(null);
        setIsExpanded(false);
    };

    const handleFormCancel = () => {
        setCurrentForm(null);
        setIsExpanded(false);
    };

    useEffect(() => {
        const handleCancelExpansionKey = (event: KeyboardEvent) => {
            if (isExpanded && event.key == 'Escape') {
                setIsExpanded(false);
            }
            else if(currentForm != null && event.key == 'Escape') {
                setCurrentForm(null);
            }
        };

        window.addEventListener('keydown', handleCancelExpansionKey);
        return () => {
            window.removeEventListener('keydown', handleCancelExpansionKey);
        };
    }, [isExpanded, currentForm]);

    return (
        <div>
            {currentForm !== null && (
                <>
                    {currentForm === 0 && (
                        <>
                            {isExpanded ? (
                                <div style={getModalStyle(isExpanded)}>
                                    <ProjectForm
                                        projectManager={projectManager}
                                        initialData={projectData}
                                        onSubmit={handleFormSubmit}
                                        onCancel={handleFormCancel}
                                        setProjectRefresh={setProjectRefresh}
                                        isExpanded={isExpanded}
                                        setIsExpanded={setIsExpanded}
                                    />
                                </div>
                            ) : (
                                <Draggable handle=".handle" nodeRef={nodeRef}>
                                    <div ref={nodeRef} style={getModalStyle(isExpanded)}>
                                        <ProjectForm
                                            projectManager={projectManager}
                                            initialData={projectData}
                                            onSubmit={handleFormSubmit}
                                            onCancel={handleFormCancel}
                                            setProjectRefresh={setProjectRefresh}
                                            isExpanded={isExpanded}
                                            setIsExpanded={setIsExpanded}
                                        />
                                    </div>
                                </Draggable>
                            )}
                        </>
                    )}
                    {currentForm === 1 && (
                        <div style={getModalStyle(true)}>
                            <AddJSONProjectForm
                                projectManager={projectManager}
                                onSubmit={handleFormSubmit}
                                onCancel={handleFormCancel}
                                setProjectRefresh={setProjectRefresh}
                            />
                        </div>
                    )}
                </>
            )}
            <div className="flex flex-row">
                <button onClick={() => setCurrentForm(0)} className="flex bg-gray-100 border-gray-200 border flex-row gap-2 mt-5 ml-5 mb-5 transition duration-100 hover:bg-gray-200 rounded active:bg-gray-200 p-3 justify-center items-center">
                    <AddCircle sx={{ color: 'var(--iris-primary)' }} />
                    <span>Add project</span>
                </button>

                <button onClick={() => setCurrentForm(1)} className="flex bg-gray-100 p-3 border-gray-200 border flex-row gap-2 mt-5 mb-5 ml-1 p-3 transition duration-100 hover:bg-gray-200 rounded active:bg-gray-200 justify-center items-center">
                    <Description sx={{ color: 'var(--iris-primary)' }} />
                    <span>Add via JSON</span>
                </button>
            </div>
        </div>
    );
}

export default AddProject;
