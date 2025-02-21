pipeline {
    agent any  // Runs on any available agent

    tools { 
        nodejs "Node 20" // Ensure Node.js 20 is installed in Jenkins tools
    }

    environment {
        APP_PORT = '3000'    // Port to serve the app
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ArinPrajapati/todoApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --coverage' // Generate test coverage report
            }
        }

        stage('Deploy') {
            steps {
                // Ensure SSH access is set up
                sh 'scp -r build/* user@server:/var/www/html'
            }
        }
    }

    post {
        success {
            echo '✅ React App is successfully deployed!'
            echo '🌍 Visit: http://your-server-ip:3000'
        }
        failure {
            echo '❌ Deployment Failed! Check logs for details.'
        }
    }
}
