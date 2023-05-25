#!/bin/bash

print_usage() {
  echo -e "\nAccepted arguments for this script are:"
  echo -e "\n\t-d use default YAML path to edit the YAML file"
  echo -e "\n\t-c use custom YAML path to edit the YAML file"
  echo -e "\n\t-f path to the YAML file to be edited"
  echo -e "\n\t-v YAML key to use (the YAML key selected in the path will be replaced with this key)"
  exit 1
}

# Modify the image (tag) of each specific container in a K8s yaml deploy file using YQ CLI utility (tested YQ version: 4.28.2)
#
# Inputs:
#   (1) target file: YAML file to be modified
#   (2) new_image_name: YAML file to be modified
#
# Internal variables:
#   yaml_path: YAML path to modify (path to specific element to be modified)
#
modify_yaml_img_value() {
  # Process Script flags using "Google Shell Style Guide" (taken and adapted from: https://stackoverflow.com/questions/7069682/how-to-get-arguments-with-flags-in-bash)
  while getopts 'df:c:v:' flags; do
    case "$flags" in
      d) default_yaml_path=".spec.template.spec.containers[0].image" ;;
      c) custom_yaml_path="$OPTARG" ;;
      f) yaml_target_file="$OPTARG" ;;
      v) yaml_attr_value="$OPTARG" ;;
      *) print_usage
         exit 1 ;;
    esac
  done

  echo "custom yaml path value: $custom_yaml_path"
  echo "default yaml path value: $default_yaml_path"
  echo "yaml target file: $yaml_target_file"
  echo "yaml attr value: $yaml_attr_value"

  new_image_name="$yaml_attr_value"

  # Use default YAML path (this happens when calling this script with no arguments).
  if [ -z $custom_yaml_path ]
  then
    echo "update_yaml_script::: Yaml path to modify is: \"$default_yaml_path\""
    yq "$default_yaml_path = \"$new_image_name\"" -i $yaml_target_file
    exit 0
  fi

  # Use custom YAML path
  echo "update_yaml_script::: Yaml path (custom path) to modify is: \"$custom_yaml_path\""
  yq "$custom_yaml_path = \"$new_image_name\"" -i $yaml_target_file
}

# Call function and pass all the arguments from STDIN into that function.
modify_yaml_img_value $@
