def dockerhub = "michan11/api-jenkins"
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {
    agent any

    environment {
        branch = "testing"
    }

    parameters {
        string(name: 'DOCKERHUB', defaultValue: 'nameDockerID', description: 'DockerID')
        booleanParam(name: 'RUNTEST', defaultValue: 'false', description: 'Not Running')
        choice(name: 'DEPLOY', choices: ["master", "testing"], description: 'Build Run')
    }

    stages {

        stage("Installing ....") {
            steps {
                nodejs("node") {
                    sh 'npm install'
                }
            }
        }

        stage("Build Docker to Production") {
            when {
                expression {
                    params.DEPLOY == "master"
                }
            }

            steps {
               script {
                   builder = docker.build("${image_name}")
               }
            }
        }

        stage("Build Docker to Testing") {
            when {
                expression {
                    params.DEPLOY == "testing"
                }
            }

            steps {
               script {
                   builder = docker.build("${dockerhub}:${env.branch}")
               }
            }
        }

        stage("Testing") {
            when {
                expression {
                    params.RUNTEST
                }
            }
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
            when {
                expression {
                    params.DEPLOY == "master"
                }
            }
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'productionServer',
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        execCommand : "cd dockerize; docker-compose up -d",
                                        execTimeout: 1200000
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage("Deploy Testing") {
            when {
                expression {
                    params.DEPLOY == "testing"
                }
            }
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'testingServer',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand : "cd dockerize; docker-compose up -d",
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