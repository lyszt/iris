import { type FC } from "react";
import { useState, useEffect } from "react";
import Network, { type NetworkResponse } from "../../lib/Network.ts";
import type { Project } from "../../types";
import { type GridColDef } from "@mui/x-data-grid";
import Datagrid from "../../components/datagrid";
import { API_URL } from "../../config";
import AddProject from "./AddProject";
import Folder from '@mui/icons-material/Folder';



const Home: FC = () => {
  const baseUrl = API_URL;
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLength, setProjectsLength] = useState(0);
  const [projectRefresh, setProjectRefresh] = useState(0);

  const projectManager = new Network(baseUrl);

  useEffect(() => {
    (async () => {
      const res: NetworkResponse<{ data: Project[] }> = await projectManager.get<{ data: Project[] }>("/projects");
      if (res.ok && res.body?.data) {
        setProjects(res.body.data);
        setProjectsLength(res.body.data.length);
      } else {
        console.error("Failed to fetch projects: status", res.status, res.body);
      }
    })();
  }, [projectRefresh]);
  



  let currentPaginationModel = { page: 0, pageSize: projectsLength || 5 };
  const projectColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70, minWidth: 50 },
    { field: "name", headerName: "Project Name", width: 200, minWidth: 150, flex: 1 },
    { field: "description", headerName: "Project Description", width: 300, minWidth: 200, flex: 2 },
    { field: "status", headerName: "Project Status", width: 120, minWidth: 100 },
    {
      field: "stacks",
      headerName: "Stacks",
      width: 200,
      minWidth: 150,
      valueGetter: (_value, row) => {
        return row.stacks?.map((stack: any) => stack.name).join(", ") || "";
      }
    }
  ];


  return (
    <main>
      <header className="bg-gray-100 p-5 w-full">
        <h1 className="w-full flex justify-left items-center gap-5">
          <Folder sx={{ fontSize: 40, color: 'var(--iris-primary)' }} />
          Current ongoing projects
        </h1>
      </header>

    <section aria-label="Project management">
      <AddProject projectManager={projectManager} projectRefresh={projectRefresh} setProjectRefresh={setProjectRefresh} />
      <Datagrid
        rows={projects}
        columns={projectColumns}
        paginationModel={currentPaginationModel}
      />
    </section>
    </main>

  );
};

export default Home;
