pipeline{
    agent 'any'
  parameters {
  gitParameter branch: '', branchFilter: '.*', defaultValue: '', description: '', name: 'GIT_TAG', quickFilterEnabled: false, selectedValue: 'NONE', sortMode: 'NONE', tagFilter: '*', type: 'PT_TAG'
}
    stages{
        stage("get_tags"){
            steps{
               input message: 'Please proceed with tagging', ok: 'Proceed with this tag', parameters: [gitParameter(branch: '', branchFilter: '.*', defaultValue: '', description: '', name: 'GIT_TAG', quickFilterEnabled: false, selectedValue: 'NONE', sortMode: 'NONE', tagFilter: '*', type: 'PT_TAG')]
            }
           
        }
        stage("provide_message"){
            steps{
                sh"""
                 ls -la 
                """
            }
        }
    }
}
