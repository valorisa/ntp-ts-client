#!/bin/bash
registries=(
    "https://registry.npmjs.org/"
    "https://registry.yarnpkg.com/"
    "https://registry.npmmirror.com/"
    "https://r.cnpmjs.org/"
)
for registry in "${registries[@]}"; do
    echo "Testing $registry..."
    curl -o /dev/null -s -w "Latency: %{time_total} seconds\n" "$registry"
    echo "----------------------------------------"
done
