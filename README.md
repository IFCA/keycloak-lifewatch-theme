# Wikitolearn theme

## Setting up the archive

Run `create-theme-archive.sh` (work only on shell environment):

        ./create-theme-archive.sh

This will create the archive `wikitolearn.zip` containing all useful info for deploying.

## Deploying

Copy the archive on your keycloak root directory and run:

        bin/jboss-cli.sh --command="module add --name=org.wikitolearn.wikitolearn --resources=wikitolearn.zip"