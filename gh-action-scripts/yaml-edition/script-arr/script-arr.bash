#!/bin/bash

# Modify the image (tag) of each specific container in a K8s yaml deploy file using YQ CLI utility (tested YQ version: 4.28.2)
#
# Inputs:
#   (1) target file: YAML file to be modified
#   (2) i: Index that specifies the element of YAML array to be modified (useful when there are more than one container to be modified).
#   (3) new_image_name: YAML file to be modified
#
# Internal variables:
#   yaml_path: YAML path to modify (path to specific element to be modified)
#
modify_img_value () {
    target_file="$1" # Name of the YAML file to be modified.
    i=$2
    yaml_path=".spec.template.spec.containers[$i].image"
    new_image_name="$3"
    echo "update_yaml_script::: Modifying index \"$i\" with new value \"$new_image_name\""
    echo "update_yaml_script::: Yaml path to modify is: \"$yaml_path\""
    yq "$yaml_path = \"$new_image_name\"" -i $target_file
}

# Main function, used to allow this script receive parameters from standard input.
update_yaml_image_values () {
    yaml_filename="$1" # Yaml file to be modified.
    images_filename="$2" # Text file with list of images separated by newline. Each image name should be within its own line.

    echo "update_yaml_script::: yaml_filename: $yaml_filename."
    echo "update_yaml_script::: images_filename: $images_filenam."

    # Assign default value if no argument was provided
    if [ -z "$1" ] || [ -z "$2" ]
    then
        echo "\nupdate_yaml_script::: Wrong arguments. This scripts has two arguments (yaml_filename, images_filename) that can not be null and their current values are \"$1\" and \"$2\" respectively. Halting the script because wrong call."
        echo "\nupdate_yaml_script::: Correct way of calling this script: ./script-arr.bash yaml_filename images_filename"
        exit 1
    fi

    # Copy conteents of yaml_filename file to be able to modify its contents while it is being read.
    tmp_yaml_file=$(mktemp)
    cp $yaml_filename $tmp_yaml_file

    # Modify image for each container image found within the YAML file.
    i=0
    while read line
    do 
        image_name=$line
        modify_img_value $tmp_yaml_file $i $image_name
        i=$((i+1)) # Increment index by 1 on each iteration
    done < "$images_filename"

    # Copy changes on temporary file to yaml_filename file when all the process has been completed.
    echo "update_yaml_script::: run: cp $tmp_yaml_file $yaml_filename"
    cp $tmp_yaml_file $yaml_filename
}

# Call main function with two arguments taken from STDIN
update_yaml_image_values $1 $2
