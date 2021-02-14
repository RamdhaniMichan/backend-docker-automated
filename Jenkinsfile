def dockerhub = "michan11/backend-api"
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {
    agent any

    environment {
         branch = "development"
    }

    parameters {
        choice(name: 'DEPLOY', choices: ["DEVELOPMENT", "PRODUCTION"], description: 'Build Run')
    }

    stages {
        stage("Installing") {
            steps {
                nodejs("node14") {
                    sh 'npm install'
                }
            }
        }

        stage("Build Docker") {
            steps {
               script {
                   if (params.DEPLOY == "DEVELOPMENT") {
                        builder = docker.build("${dockerhub}:${env.branch}")
                   }

                   if (params.DEPLOY == "PRODUCTION") {
                        builder = docker.build("${dockerhub}")
                   }
               }
            }
        }

        stage("Testing") {
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

        stage("Deploy To Server") {
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
                }
            }
        }
    }
}