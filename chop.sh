#!/bin/bash
FILES=`pwd`/*.html
for f in *.html
do    
    mv $f $f.chopped; 
    sed "1,75d;" $f.chopped > $f; 
    rm $f.chopped
done
