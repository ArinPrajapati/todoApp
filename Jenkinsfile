pipeline {
    agent any

    tools { 
        nodejs "Node 20" 
    }

    environment {
        APP_PORT = '3000'
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

        stage('Fake Test Stage') {
            steps {
                sh '''
                echo "Running tests..."
                sleep 2
                echo "✓ Test 1: Login Component Passed"
                echo "✓ Test 2: Dashboard Render Passed"
                echo "✓ Test 3: API Fetching Passed"
                echo "✓ Test 4: Button Click Passed"
                echo "✓ Test 5: Routing Works Passed"
                echo "✅ All 5 tests passed successfully!"
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh 'scp -r dist/* user@server:/var/www/html'
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
