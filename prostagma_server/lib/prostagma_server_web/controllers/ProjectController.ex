defmodule ProstagmaServerWeb.ProjectController do
  use ProstagmaServerWeb, :controller

  def list() do
    # Meant to list all created projects, whether it be running or not
    json(conn, %{status: 200})
  end

  def add(projectName, projectDescription, projectStatus, projectStack) do
    # This will be the controller function that adds new projects. Should probably call the repository.
    json(conn, %{status: 200})
  end
end
