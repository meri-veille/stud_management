
pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing testing dependencies...'
                bat 'npm ci'
                echo 'Dependencies installed successfully!'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'Testing Campus Desk HTML files...'
                bat 'npm run test:unit'
                echo 'Unit tests completed successfully!'
            }
        }

        stage('Integration Testing') {
            steps {
                echo 'Testing Campus Desk page connections...'
                bat 'npm run test:integration'
                echo 'Integration tests completed successfully!'
            }
        }

        stage('Build') {
            steps {
                echo 'Starting Campus Desk Docker build...'
                bat 'docker --version'
                bat 'docker build -t devops-app:1.0 .'
                echo 'Docker image build completed!'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All tests passed and Docker image built.'
        }

        failure {
            echo 'FAILURE: Check the Jenkins Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
