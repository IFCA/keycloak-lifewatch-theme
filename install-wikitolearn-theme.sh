#!/bin/sh

if [ -d keycloak-lifewatch-theme ]; then
    rm -rf keycloak-lifewatch-theme
fi
git clone https://github.com/IFCA/keycloak-lifewatch-theme
cd keycloak-lifewatch-theme
chmod +x create-theme-archive.sh
# This must be executed from theme root directory
./create-theme-archive.sh
cd ..
bin/jboss-cli.sh --command="module add --name=org.lifewatch.lifewatchTheme --resources=keycloak-lifewatch-theme/lifewatch-theme.zip"
# Remove downloaded files
rm -rf keycloak-lifewatch-theme
