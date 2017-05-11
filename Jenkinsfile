node("docker") {
    docker.withRegistry('https://registry.hub.docker.com', 'docker-registry-login') {

        git url: "git@github.com:yaempioy/app_demo.git", credentialsId: 'e108d6af-3556-4c83-928f-652c16bed1ca'

        sh "git rev-parse HEAD > .git/commit-id"
        def commit_id = readFile('.git/commit-id').trim()
        println commit_id

        stage "build"
        def app = docker.build "kornkitti/app_demo"

        stage "publish"
        app.push 'master'
        app.push "${commit_id}"
    }
}
