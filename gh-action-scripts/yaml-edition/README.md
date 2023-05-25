# YAML Edition Script

## Description

This folder may hold scripts for editing YAML files. Each script can be kept within its own file or within a folder (if the devs consider that more appropriate).

## Script Description

### edit-one-field

This script has been designed to modify a specic YAML attribute by specifying a YAML path or a value, it has a default YAML path that modifies the image of a container within a K8s deployment.

The default path is the following:

```
.spec.template.spec.containers[0].image
```

It should be executed like this desde GitHub Actions (requires execution permissions):

```
gh-action-scripts/yaml-edition/script-err/script-arr.bash yaml_filename.yaml images_filename.txt
```

### script-arr

This script is able to modify a YAML array such as images using a specific YAML path. Currently the following YAML path is being used.

```
.spec.template.spec.containers[$i].image
```

It should be executed like this desde GitHub Actions (requires execution permissions):

```
gh-action-scripts/yaml-edition/script-err/script-arr.bash yaml_filename.yaml images_filename.txt
```

#### Considerations

* The script may be adapted to edit different YAML array elements by changing the YAML path adequately and doing some testing.
* The cardinality of the __images\_filename__ should match with the ammount of images located in the YAML file, some verification and testing is usually needed before using this script to avoid making unintended changes to the YAML file.
