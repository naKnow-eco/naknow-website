#!/bin/bash
DOT_ENV_FILE=".env"
if [ -f $DOT_ENV_FILE ]; then
  source $DOT_ENV_FILE
fi

LOCAL_PATH="$(dirname "$0")/../i18n/locales";
LOCALES=( "en-US" );

for locale in "${LOCALES[@]}"; do curl "https://localise.biz/api/export/locale/${locale:0:2}.json?printf=icu" -u $LOCALISE_API_KEY: > $LOCAL_PATH/$locale.json; done