#!/bin/bash
# Create "lifewatch-theme" theme as an archive. Must be executed within keycloak root directory

if [ -d theme ]; then
    rm -rf theme
fi
mkdir theme
if [ -d META-INF ]; then
    rm -rf META-INF
fi
cp -r lifewatch-theme theme/
mv theme/lifewatch-theme/META-INF .
zip -r lifewatch-theme.zip theme META-INF

# Remove junk
rm -r theme
rm -r META-INF
