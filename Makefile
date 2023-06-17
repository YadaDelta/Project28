install:
	npm i
lint:
	npx eslint .
fix:
	npx eslint . --fix
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage