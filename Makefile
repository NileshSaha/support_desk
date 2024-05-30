help:
	@echo "Available commands:"
	@echo "  make init Setup project required for development"

dev:
	docker compose up --build --force-recreate -d

down:
	docker compose down

lg_app:
	docker compose logs api --tail 100 --follow

lg_cl:
	docker compose logs client --tail 100 --follow

lg_nx:
	docker compose logs nginx --tail 100 --follow