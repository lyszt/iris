.PHONY: run server frontend help

# Run both Phoenix server and Node dev server concurrently
run:
	@echo "Starting Phoenix server and Node dev server..."
	@trap 'kill 0' EXIT; \
	cd iris_server && mix phx.server & \
	npm run dev & \
	wait

# Run only Phoenix server
server:
	@cd iris_server && mix phx.server

# Run only Node dev server
frontend:
	@npm run dev

# Show available commands
help:
	@echo "Available commands:"
	@echo "  make run       - Run both Phoenix and Node dev servers concurrently"
	@echo "  make server    - Run only Phoenix server"
	@echo "  make frontend  - Run only Node dev server"
	@echo "  make help      - Show this help message"
