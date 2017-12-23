#!/bin/sh

if [ -d keycloak-wikitolearn-theme ]; then
    rm -rf keycloak-wikitolearn-theme
fi
git clone https://github.com/sgametrio/keycloak-wikitolearn-theme.git
cd keycloak-wikitolearn-theme
chmod +x create-theme-archive.sh
# This must be executed from theme root directory
./create-theme-archive.sh
cd ..
bin/jboss-cli.sh --command="module add --name=org.wikitolearn.wikitolearnTheme --resources=keycloak-wikitolearn-theme/wikitolearn.zip"
# Remove downloaded files
rm -rf keycloak-wikitolearn-theme