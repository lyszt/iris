defmodule ProstagmaServer.Repo do
  use Ecto.Repo,
    otp_app: :prostagma_server,
    adapter: Ecto.Adapters.Postgres
end
