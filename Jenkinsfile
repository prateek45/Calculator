pipeline {
    agent any
    tools {nodejs "NodeJS 20.0.0"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}