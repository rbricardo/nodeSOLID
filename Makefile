include .env

.PHONY: run-dev

run-dev:
	@echo "---- Running Database: MedGrupo develop ----"
	@docker-compose -f docker-compose.dev.yml down
	@docker-compose -f docker-compose.dev.yml up -d

.PHONY: stop-dev

stop-dev:
	@echo "---- Stoping Database: MedGrupo develop ----"
	@docker-compose -f docker-compose.dev.yml down