<<<<<<< HEAD

=======
def dockerhub = "michan11/backend-api"
>>>>>>> edit jenkinsfile
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {
    agent any

    environment {
<<<<<<< HEAD
        branch = "testing"
    }

    parameters {
=======
        branch = "development"
    }

    parameters {
        choice(name: 'DEPLOY', choices: ["DEVELOPMENT", "PRODUCTION"], description: 'Build Run')
>>>>>>> edit jenkinsfile
    }

    stages {

<<<<<<< HEAD
=======
        stage("Installing") {
            steps {
                nodejs("node14") {
>>>>>>> edit jenkinsfile
                    sh 'npm install'
                }
            }
        }

<<<<<<< HEAD
       
=======
        stage("Build Docker") {
            steps {
               script {
                   if (params.DEPLOY == "DEVELOPMENT") {
                        builder = docker.build("${dockerhub}:${env.branch}")
                   }

                   if (params.DEPLOY == "PRODUCTION") {
                        builder = docker.build("${dockerhub}")
                   }
>>>>>>> edit jenkinsfile
               }
            }
        }

        stage("Testing") {
<<<<<<< HEAD
=======
>>>>>>> edit jenkinsfile
            steps {
                 script {
                     builder.inside {
                         sh 'echo Success Testing Image'
                     }
                 }
            }
        }

        stage("Push Image") {
            steps {
                 script {
                     builder.push()
                 }
            }
        }

        stage("Deploy Production") {
<<<<<<< HEAD
            
=======
            steps {
                script {
                    if (params.DEPLOY == "DEVELOPMENT") {
                        sshPublisher(
                            publishers: [
                                sshPublisherDesc(
                                    configName: 'develop',
                                    verbose: true,
                                    transfers: [
                                        sshTransfer(
                                            execCommand : "cd config-image; docker-compose up -d",
                                            execTimeout: 1200000
                                        )
                                    ]
                                )
                            ]
                        )
                    }

                    if (params.DEPLOY == "PRODUCTION") {
                        sshPublisher(
                            publishers: [
                                sshPublisherDesc(
                                    configName: 'develop',
                                    verbose: true,
                                    transfers: [
                                        sshTransfer(
                                            execCommand : "cd config-image; docker-compose up -d",
                                            execTimeout: 1200000
                                        )
                                    ]
                                )
                            ]
                        )
                    }
>>>>>>> edit jenkinsfile
                }
            }
        }
    }
}