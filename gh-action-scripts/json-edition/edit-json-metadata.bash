function update_metadata_file() {
    VARS_INFO_FILEPATH=$1

    YAML_PATHS=(
        ".organization_name"                #1
        ".dockerhub_username"               #2
        ".gh_repo_owner"                    #3
        ".gh_repo_name"                     #4
        ".gh_username"                      #5
        ".release_branch"                   #6
        ".release_branch_docker_alias"      #7
        "full_release_docker_img_name"      #8
    )

    echo "$(jq '.organization_name = "sample-org-name"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
    )

    echo "$(jq '.organization_name = "sample-org-name"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
    echo "$(jq '.dockerhub_username = "sample-dockerhub-username"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
    echo "$(jq '.gh_repo_owner = "sample-gh-repo-owner"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
    echo "$(jq '.gh_repo_name = "sample-gh-repo-name"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
    echo "$(jq '.gh_username = "sample-gh-username"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
    echo "$(jq '.release_branch = "sample-release-branch"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
    echo "$(jq '.release_branch_docker_alias = "sample-release-branch-docker-alias"' $VARS_INFO_FILEPATH)" > $VARS_INFO_FILEPATH
}

update_metadata_file $@
