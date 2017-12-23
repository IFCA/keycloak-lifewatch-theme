#!/bin/bash
# Create "wikitolearn" theme as an archive. Must be executed within keycloak root directory

if [ -d theme ]; then
    rm -rf theme
fi
mkdir theme
if [ -d META-INF ]; then
    rm -rf META-INF
fi
cp -r wikitolearn theme/
mv theme/wikitolearn/META-INF .
zip -r wikitolearn.zip theme META-INF

# Remove junk
rm -r theme
rm -r META-INF
