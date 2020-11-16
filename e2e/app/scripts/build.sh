#!/usr/bin/env bash

set -x

if [ -z "$SKIP_BUILD" ]; then
    npm run clean

    if [ "$TEST_TARGET" = "web" ]; then
        npx remax build -t web
    else
        npx remax build && cd build && cube build --webng=appxng --native=false --appxcompatible && mv dist ..
    fi
fi
