# MediaJel Engineering Coding Challenge

## Context

Welcome to Carpe Vinum -  the open source tool for wine lovers to connect, track their tasting sessions, and discover new wine.

Imagine that you have been brought on to the intitial team that is tasked with expanding out the wine tasting session functionality. A group of users and their experience regarding a specific wine will be tagged using the Form component seen in `./src/components/TastingSession/Form`. The `./src/components/TastingSession/Home` component contains a button that creates a new tasting session and opens the form component. This tasting session data will eventually be used to suggest new products to the user. The purpose of this coding challenge is to demonstrate ability in both working with GraphQL and building front-end components.

## Objectives

The datamodel can be found at `./database/datamodel.graphql`. By the end of the challenge, this data model should be expanded and the neccessary changes reflected in the Form component. The other goal of this challenge will be to create the view and functionality where a user can see a list of their existing tasting sessions to go back into a session to update it or delete the session entirely.

Some goals could look like the following, but not limited to:

- [ ] Update and Delete functionality
- [ ] Review expanded with fields such as: predicted price, suggested pairing, or predicted year
- [ ] WineTaster expanded to include other user profile fields
- [ ] Wines have an attached image (a placeholder image is found in `./src/assets`)
- [ ] TastingSessions have a date

Modularity and functionality is emphasized here, rather than visual appeal (basic HTML styling should be fine). Boilerplate is provided, that demonstrates how to connect to the Prisma instance from the client using React Apollo. The existing code should not be considered complete or a good representation of the final solution. Creativity is encouraged. 

A secondary objective could be to implement a popular UI framework such as Material, Semantic, or ANT, but update and delete functionality is the priority.

## Technologies
There is some code provided that will allow you to get started quickly, without worrying too much about setup. There are, however, a few dependencies that you might have to install on your system.

### Installing Yarn (OSX)
To install Yarn, make sure that you use use the --without-node flag to use nvm's version.

```
brew install yarn --without-node
```

To access Yarn's executables globally, add the folowing to your profile.

```
export PATH="$PATH:`yarn global bin`"
```

### Installing NodeJS with NVM
Use either curl or wget to install NVM

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

The script will clone the NVM repository to a .nvm folder in your home directory. It will also add the source
line to your profile (e.g. `~/.bash_profile`). Note that you might want to add it yourself.
Enesure that the following is in your profile.

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

If everything is correctly configured, reload your shell: `source ~\.bash_profile`

The proper version of NodeJS can now be installing using NVM. As of writing this, we are using v10.0.0

```
nvm install v10.0.0
```

You might also want to set it as the default.

```
nvm alias default v10.0.0
```

### Installing GraphQL and Prisma CLIs
You need to have the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli) installed to bootstrap your GraphQL server using `graphql create`. The [Prisma CLI](https://github.com/prismagraphql/prisma/) allows you to deploy your code.

```sh
yarn global add graphql-cli
yarn global add prisma
yarn global add prisma-binding
```

### Installing Docker
Installing Docker will depend on your system.  The instructions for OSX can be found here: https://docs.docker.com/docker-for-mac/install/

It's important to make sure that docker-compose is also installed, as it will be used to run the backend. 

## Setup

Once all your dependencies are installed, you can begin deploying your backend, which will consist of a [Prisma](https://www.prisma.io/) server connected to a local [MySQL](https://www.mysql.com/) instance. 

- The following will start the backend: 
```sh
docker-compose up -d
```
- We can deploy the datamodel (found at `./database/datamodel.graphql`) using the following command. Follow the prompt to set up a local server using Docker.
```sh
prisma deploy
```
- The front-end can be started by simply running
```sh
yarn && yarn start
```

## GraphQL Playground

Prisma comes with a [built in IDE](https://github.com/prisma/graphql-playground) for viewing your data and schema. It can be viewed in your browser on the Docker endpoint, such as `http://localhost:4466`.

## Code of Conduct

All work is to be done on feature branches off of the "develop" branch. Feature branches should be named with your lowercase full name without spaces such as `justinkaseman`.

For Example:

git branch <initials-feature>
git checkout <initials-feature>

After completion, push to your feature branch and submit a pull request by filling out the PR template.

Happy Coding!

