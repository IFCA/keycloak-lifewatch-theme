# Wikitolearn theme

## Setting up the archive (Recommended method)

This is recommended because it is versioned (read from `package.json`) and can be extended using node tools to create you build environment

        npm install
        node release-theme.js <optional_destination_folder>

You will find `wikitolearn-theme-dist-${version}.zip` in your destination directory. It defaults to `dist`

## Setting up the archive (Alternative method)

Run `create-theme-archive.sh` (work only on shell environment):

        ./create-theme-archive.sh

This will create the archive `wikitolearn.zip` containing all useful info for deploying.

## Deploying

Copy the archive on your keycloak root directory and run:

        bin/jboss-cli.sh --command="module add --name=org.wikitolearn.wikitolearn --resources=path/to/wikitolearn.zip"