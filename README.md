# The Huntnite website

This repo houses the assets used to build the Huntnite website, available at https://huntnite.com/


## Tools 

The site was created and launched using React (npm react-create-app). The components are divided into groups and located in the `.src/componets` folder. 
The main page has been moved to `.src/pages` to facilitate further expansion of the site.

The [SASS](https://sass-lang.com/) preprocessor  and modular system were used to create the styles, with most modules located in the `.src/style/` folder.

Translation is realted with [i18next](https://www.i18next.com/).

Animations based on [framer-motion](https://www.framer.com/motion/)


### Creating a PR
In general, all PRs should be made against the `main` branch to update the edge version of the docs. If you are making a change that also affects released versions, indicate which release branches to update in your PR so a website maintainer can backport your changes.


## Run the Huntnite website locally

### Step 1: Clone project

```sh
git clone https://github.com/AlexStorzh/Huntnite
cd Huntnite
```

## Step 2: Install npm dependencies

```sh
npm i
```

## Step 3: Run Huntnite in server mode

```sh
npm start
```

This starts up the local Huntnite server on http://localhost:3000. As you make changes, the site refreshes automatically in your browser.
