defmodule ProstagmaServerWeb.PageController do
  use ProstagmaServerWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
