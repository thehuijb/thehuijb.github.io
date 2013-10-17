#!/bin/sh

# Credits goes to http://stackoverflow.com/questions/1589114/opening-a-new-terminal-tab-in-osxsnow-leopard-with-the-opening-terminal-window#answer-7911097
# I just slightly modified it to take an argument.

new_tab() {
        pwd=`pwd`
        osascript -e "tell application \"Terminal\"" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "do script \"printf '\\\e]1;$2\\\a'; \" in front window" \
        -e "do script \"cd $pwd; clear; $1;\" in front window" \
        -e "end tell"
        > /dev/null
}

init(){
        new_tab "grunt jekyll:server" "jekyll"
        new_tab "grunt watch" "watch"
        new_tab "dyson ./rest" "dyson"
}

#BOOM!
init
