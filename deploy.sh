#!/bin/bash

echo "Pushing public/ to tglo.net..."
rsync -r --info=stats1 ./public/* tglo.net:.
