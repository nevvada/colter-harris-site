# NOTE: added a bunch of extra commands because this is a learning project, not necessarily an elegant one

###################################################
# Dockerfile-based commands
###################################################

DEV_IMAGE_NAME = colter-harris-site-image-dev
PROD_IMAGE_NAME = colter-harris-site-image-prod

DEV_CONTAINER_NAME = colter-harris-site-container-dev
PROD_CONTAINER_NAME = colter-harris-site-container-prod

build-dev:
	@echo "💛 Building the dev image 💛"
	@docker build -f Dockerfile.dev -t $(DEV_IMAGE_NAME) .

run-dev:
	@echo "💚 Running the dev image 💚"
	@docker run --name $(DEV_CONTAINER_NAME) -d -p 3000:3000 -v $(PWD):/app -e NODE_ENV=development $(DEV_IMAGE_NAME)

cleanup-dev:
	@echo "🧹 Cleaning up existing containers and images 🧹"
	-@docker container stop $(DEV_CONTAINER_NAME)
	-@docker container rm $(DEV_CONTAINER_NAME)
	-@docker rmi $(DEV_IMAGE_NAME)

start-dev:
	make cleanup-dev
	make build-dev
	make run-dev

build-prod:
	@echo "💛 Building the prod image 💛"
	@docker build -f Dockerfile.prod -t $(PROD_IMAGE_NAME) .

run-prod:
	@echo "💚 Running the prod image 💚"
	@docker run --name $(PROD_CONTAINER_NAME) -d -p 8000:8000 -v $(PWD):/app -e NODE_ENV=production $(PROD_IMAGE_NAME)

cleanup-prod:
	@echo "🧹 Cleaning up existing containers and images 🧹"
	-@docker container stop $(PROD_CONTAINER_NAME)
	-@docker container rm $(PROD_CONTAINER_NAME)
	-@docker rmi $(PROD_IMAGE_NAME)

start-prod:
	make cleanup-prod
	make build-prod
	make run-prod


###################################################
# Docker-compose-based commands
###################################################

DEV_COMPOSE_FILE = docker-compose.dev.yml
PROD_COMPOSE_FILE = docker-compose.prod.yml

build-dev-compose:
	@echo "💛 Building with docker-compose for dev... 💛"
	@docker-compose -f $(DEV_COMPOSE_FILE) build

run-dev-compose:
	@echo "💚 Running with docker-compose for dev... 💚"
	@docker-compose -f $(DEV_COMPOSE_FILE) up -d

stop-dev-compose:
	@echo "🛑 Stopping services for dev... 🛑"
	@docker-compose -f $(DEV_COMPOSE_FILE) down

build-prod-compose:
	@echo "💛 Building with docker-compose for production... 💛"
	@docker-compose -f $(PROD_COMPOSE_FILE) build

run-prod-compose:
	@echo "💚 Running with docker-compose for production... 💚"
	@docker-compose -f $(PROD_COMPOSE_FILE) up -d

stop-prod-compose:
	@echo "🛑 Stopping services for production... 🛑"
	@docker-compose -f $(PROD_COMPOSE_FILE) down

###################################################

.PHONY: build-dev