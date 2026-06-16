#!/bin/bash

DEST=src/scripts/random-page.js

if [ ! -d src ]
then
    echo Run this script from the top of the repo
    exit 1
fi

if [ ! -f "$DEST" ]
then
    echo Cannot find current random-page.js file
    echo Is this being run from the right spot'?'
    exit 1
fi

list=$(find src/pages -name '[0-9][0-9][0-9]-*.html' -print)

echo "const pages = [" > "$DEST"

# src/pages/overworld/000-plaza.html -> /pages/overworld/000-plaza/
count=0
for line in $list
do
    prefix=${line#src}
    full=${prefix%.html}/
    echo "    \"${full}\"", >> $DEST
    (( count = count + 1 ))
done

cat << EOF >> "$DEST"
];

document.getElementById("random-page").addEventListener("click", () => {
    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];
    window.location.href = randomPage;
});
EOF
echo '[update-random]' Generated links for $count pages
exit 0
